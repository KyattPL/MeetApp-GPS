<script lang="ts">
    import { redirect } from '@roxi/routify';

    import * as L from 'leaflet';
    import 'leaflet/dist/leaflet.css';
    import MdCheck from 'svelte-icons/md/MdCheck.svelte';

    import Header from '../../../lib/Header/Header.svelte';
    import HelpButton from '../../../lib/HelpButton/HelpButton.svelte';
    import InputHelpTooltip from '../../../lib/InputHelpTooltip/InputHelpTooltip.svelte';
    import PostNameInput from '../../../lib/PostNameInput/PostNameInput.svelte';
    import execute from '../../../lib/fetchWrapper';
    import PostDateInput from '../../../lib/PostDateInput/PostDateInput.svelte';
    import PostTimeInput from '../../../lib/PostTimeInput/PostTimeInput.svelte';
    import PeopleLimitInput from '../../../lib/PeopleLimitInput/PeopleLimitInput.svelte';
    import PostDescription from '../../../lib/PostDescription/PostDescription.svelte';
    import Button from '../../../lib/Button/Button.svelte';
    import MultiselectCategoryInput from '../../../lib/MultiselectCategoryInput/MultiselectCategoryInput.svelte';
    import SelectCityInput from '../../../lib/SelectCityInput/SelectCityInput.svelte';
    import MdAdd from 'svelte-icons/md/MdAdd.svelte';

    import { userDetails, selectedLatitude, selectedLongitude } from '../../../lib/stores';
    import calculateDistanceBetweenCoords from '../../../lib/utils';

    let title = null;
    let isSpotPickerActive = false;

    let categories = [];
    let categoryValue = null;

    let cityValue = null;

    let descriptionValue = null;
    let scheduleValue = null;

    let startDateValue = null;
    let startTimeValue = null;
    let startDateTimeErrorMessage = null;
    let startIsoDateTime = null;

    let endDateValue = null;
    let endTimeValue = null;
    let endDateTimeErrorMessage = null;
    let endIsoDateTime = null;

    let endDateAfterStartDateErrorMessage = null;

    let peopleLimitValue = null;

    let map;
    let marker = null;
    let selectedSpot = null;

    if ($userDetails === null) {
        $redirect('/login');
    }

    execute('categories', 'GET').then(async (response) => (categories = await response.json()));

    const validateCategory = () => {
        let errorMsg = document.getElementById('categoryErrorMsg');
        if (categoryValue === null || categoryValue.length === 0) {
            errorMsg.classList.remove('hidden');
            return false;
        }
        errorMsg.className += ' hidden';
        return true;
    };

    const validateCity = () => {
        let errorMsg = document.getElementById('cityErrorMsg');
        let svControl = document.getElementById('cityInputBox').children[0].children[0];
        if (cityValue === null) {
            errorMsg.classList.remove('hidden');
            errorMsg.className += ' block';
            svControl.className += ' !border-red-500';
            return false;
        }
        errorMsg.classList.remove('block');
        errorMsg.className += ' hidden';
        svControl.classList.remove('!border-red-500');
        return true;
    };

    const validateDateTime = () => {
        if (startDateValue !== null && startTimeValue !== null) {
            let startDate = new Date(startDateValue);
            const [hours, minutes] = [startTimeValue.getHours(), startTimeValue.getMinutes()];
            startDate.setUTCHours(hours - 1);
            startDate.setUTCMinutes(minutes);

            const currentDate = new Date();
            if (startDate > currentDate) {
                if (startDateTimeErrorMessage !== null) {
                    startDateTimeErrorMessage.className += ' hidden';
                }

                startDate.setUTCHours(startDate.getUTCHours() + 1); // it's complicated
                startIsoDateTime = startDate.toISOString();

                if (endDateValue !== null && endTimeValue !== null) {
                    let endDate = new Date(endDateValue);
                    const [hours, minutes] = [endTimeValue.getHours(), endTimeValue.getMinutes()];
                    endDate.setUTCHours(hours - 1);
                    endDate.setUTCMinutes(minutes);

                    const currentDate = new Date();
                    if (endDate > currentDate) {
                        if (endDateTimeErrorMessage !== null) {
                            endDateTimeErrorMessage.className += ' hidden';
                        }

                        endDate.setUTCHours(endDate.getUTCHours() + 1); // it's complicated
                        endIsoDateTime = endDate.toISOString();

                        if (endDate.getTime() - startDate.getTime() <= 0) {
                            if (endDateAfterStartDateErrorMessage !== null) {
                                endDateAfterStartDateErrorMessage.classList.remove('hidden');
                            }

                            return false;
                        }

                        if (endDateAfterStartDateErrorMessage !== null) {
                            endDateAfterStartDateErrorMessage.className += ' hidden';
                        }

                        return true;
                    }
                }

                if (endDateTimeErrorMessage !== null) {
                    endDateTimeErrorMessage.classList.remove('hidden');
                }

                return false;
            }
        }

        if (startDateTimeErrorMessage !== null) {
            startDateTimeErrorMessage.classList.remove('hidden');
        }

        return false;
    };

    const validateDescription = () => {
        let errorMessage = document.getElementById('descriptionErrorMsg');
        if (descriptionValue === null || descriptionValue.length < 1 || descriptionValue.length > 10000) {
            errorMessage.classList.remove('hidden');
            return false;
        }
        errorMessage.className += ' hidden';
        return true;
    };

    const validateSchedule = () => {
        let errorMessage = document.getElementById('scheduleErrorMsg');
        if (scheduleValue === null || scheduleValue.length < 1 || scheduleValue.length > 5000) {
            errorMessage.classList.remove('hidden');
            return false;
        }
        errorMessage.className += ' hidden';
        return true;
    };

    const validatePeopleLimit = () => {
        let errorMessage = document.getElementById('peopleLimitErrorMsg');
        if (peopleLimitValue === null || peopleLimitValue <= 0) {
            errorMessage.classList.remove('hidden');
            return false;
        }
        errorMessage.className += ' hidden';
        return true;
    };

    const validateSpot = () => {
        let errorMessage = document.getElementById('spotErrorMsg');
        if ($selectedLatitude === 0 || $selectedLongitude === 0) {
            errorMessage.classList.remove('hidden');
            return false;
        }
        errorMessage.className += ' hidden';
        return true;
    };

    const validateTitle = () => {
        let errorMessage = document.getElementById('titleErrorMsg');
        if (title === null || title.length < 5 || title.length > 100) {
            errorMessage.classList.remove('hidden');
            return false;
        }
        errorMessage.className += ' hidden';
        return true;
    };

    const handleSubmit = async () => {
        if (
            validateTitle() &&
            validateCategory() &&
            validateCity() &&
            validateSpot() &&
            validateDateTime() &&
            validatePeopleLimit() &&
            validateDescription() &&
            validateSchedule()
        ) {
            let multipartImage = new FormData();
            multipartImage.append('cityId', cityValue.city.id);
            multipartImage.append('voivodeshipId', cityValue.voivodeship.id);
            multipartImage.append('latitude', $selectedLatitude.toString());
            multipartImage.append('longitude', $selectedLongitude.toString());
            multipartImage.append('locationId', cityValue.id);
            multipartImage.append('title', title);
            multipartImage.append('description', descriptionValue);
            multipartImage.append('schedule', scheduleValue);
            multipartImage.append('categoryIds', categoryValue);
            multipartImage.append('startDate', startIsoDateTime);
            multipartImage.append('endDate', endIsoDateTime);
            multipartImage.append('personQuota', peopleLimitValue);
            multipartImage.append('picture', blob);

            $selectedLongitude = 0;
            $selectedLatitude = 0;

            await fetch(`http://localhost:8080/api/events`, {
                method: 'POST',
                body: multipartImage
            }).then(() => $redirect('/events'));
        }
    };

    let image, fileInput;
    let blob = null;

    const onFileSelected = (e) => {
        blob = e.target.files[0];
        let reader = new FileReader();
        try {
            reader.readAsDataURL(blob);
            reader.onload = (e) => {
                image = e.target.result;
            };
        } catch (e) {
            console.error(e);
        }
    };

    function submitChoice() {
        let coords = { lat: selectedSpot.lat, lng: selectedSpot.lng };
        let distance = calculateDistanceBetweenCoords(cityValue.lat, cityValue.lng, coords.lat, coords.lng);

        console.log(distance);
        // Empirycznie sprawdzone, że tyle max od środka Warszawy do najdalszego punktu jest około xd
        if (distance > 17_000) {
            let toastObj = document.getElementById('tooFarToast');
            toastObj.classList.remove('opacity-0');
            setTimeout(() => (toastObj.className += ' opacity-0'), 5000);
            return;
        }

        $selectedLatitude = coords.lat;
        $selectedLongitude = coords.lng;
        isSpotPickerActive = false;
    }

    function createMap(container) {
        let m;

        if (marker !== null) {
            m = L.map(container).setView([marker.getLatLng().lat, marker.getLatLng().lng], 13);
        } else {
            m = L.map(container).setView([cityValue.lat, cityValue.lng], 13);
        }
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>,
          &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
            subdomains: 'abcd',
            maxZoom: 17
        }).addTo(m);

        return m;
    }

    function mapAction(container) {
        map = createMap(container);
        let customIcon = L.icon({ iconUrl: '../marker-user.png', iconSize: [25, 42] });

        if (marker !== null) {
            marker.addTo(map);
        }

        map.on('click', (e) => {
            selectedSpot = e.latlng;

            if (marker !== null) {
                marker.remove();
            }

            marker = L.marker(e.latlng, { icon: customIcon }).addTo(map);
        });

        return {
            destroy: () => {
                map.remove();
            }
        };
    }

    function openSpotPicker() {
        isSpotPickerActive = true;
    }

    function closeModal() {
        isSpotPickerActive = false;
    }
</script>

<div class="h-screen">
    <Header />
    <HelpButton>
        <p>W ramach kreatora wydarzeń przewidziane są następujące informacje:</p>
        <ul class="list-disc list-inside">
            <li>
                <span class="font-bold">Nazwa wydarzenia</span> - pozwala nadać wydarzeniu nazwę. Nazwa będzie wyświetlać się na liście wydarzeń.
            </li>
            <li>
                <span class="font-bold">Zdjęcie wydarzenia</span> - pozwala wybrać zdjęcie, które będzie wyświetlać się obok nazwy na liście wydarzeń.
            </li>
            <li>
                <span class="font-bold">Kategoria</span> - pozwala wybrać kategorie, które najlepiej oddają charakter wydarzenia. Kategorie umożliwiają
                filtrowanie wydarzeń na liście.
            </li>
            <li>
                <span class="font-bold">Miasto</span> - pozwala wybrać miasto, w którym będzie odbywać się wydarzenie.
            </li>
            <li>
                <span class="font-bold">Przycisk "Wybierz miejsce"</span> - pozwala wybrać na mapie (w zależności od wcześniej wybranego miasta) dokładną
                lokalizację wydarzenia.
            </li>
            <li>
                <span class="font-bold">Data rozpoczęcia</span> - pozwala wybrać dokładną datę i godzinę rozpoczęcia wydarzenia.
            </li>
            <li>
                <span class="font-bold">Data zakończenia</span> - pozwala wybrać dokładną datę i godzinę zakończenia wydarzenia.
            </li>
            <li>
                <span class="font-bold">Limit osób</span> - pozwala wybrać maksymalną liczbę osób, które będą mogły zapisać się na to wydarzenie.
            </li>
            <li>
                <span class="font-bold">Opis</span> - pozwala na dodanie tekstu opisującego wydarzenie. Opis będzie wyświetlać się jako dodatkowa informacja
                po wejściu w wydarzenie z poziomu listy.
            </li>
            <li>
                <span class="font-bold">Harmonogram</span> - pozwala na dodanie informacji o harmonogramie wydarzenia. Będzie wyświetlać się bezpośrednio
                pod opisem.
            </li>
        </ul>
    </HelpButton>
    <div class="flex flex-row justify-center">
        <div class="flex mt-8 flex-col gap-10">
            <InputHelpTooltip text="Wprowadź nazwę wydarzenia" />
            <InputHelpTooltip text="Dodaj zdjęcie (lub pozostaw puste)" style="!mt-4" />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <InputHelpTooltip text="Wybierz kategorie" style="!mt-4" />
            <InputHelpTooltip text="Wybierz miasto" style="" />
            <InputHelpTooltip text="Wybierz dokładne miejsce" style="!-mt-2" />
            <InputHelpTooltip text="Ustal datę rozpoczęcia" style="!mt-6" />
            <InputHelpTooltip text="Ustal datę zakończenia" style="!mt-4" />
            <InputHelpTooltip text="Ustal limit osób" style="" />
            <InputHelpTooltip text="Wprowadź opis" style="" />
            <InputHelpTooltip text="Wprowadź harmonogram" style="!mt-48" />
        </div>
        <div class="flex flex-col h-[calc(100%-4rem)] overflow-auto justify-between items-center bg-ivory">
            <div class="w-full">
                <PostNameInput placeholder="Nazwa wydarzenia" bind:value={title} maxLength={100} />
                <p class="hidden peer-invalid:block text-red-500 text-sm mx-8 mb-2" id="titleErrorMsg">Tytuł musi mieć 5-100 znaków</p>

                <p class="mx-1.5 mb-1 text-lg text-pine">Zdjęcie wydarzenia</p>
                <div class="flex justify-center">
                    {#if image !== undefined}
                        <div class="mx-8 aspect-square w-full rounded-2xl bg-white flex justify-center text-center text-pickle flex-col">
                            <img class="rounded-2xl" src={image} />
                            <div
                                class="my-2 hover:cursor-pointer"
                                on:click={() => {
                                    fileInput.click();
                                }}
                            >
                                Zmień zdjęcie
                            </div>
                        </div>
                    {:else}
                        <div
                            class="mx-14 aspect-square w-full border-pickle rounded-2xl border-2 bg-white flex justify-center text-center text-pickle flex-col hover:cursor-pointer"
                            on:click={() => {
                                fileInput.click();
                            }}
                        >
                            <div class="h-12 w-12 ml-auto mr-auto">
                                <MdAdd />
                            </div>
                            Dodaj zdjęcie
                        </div>
                    {/if}
                    <input style="display:none" type="file" accept=".jpg, .jpeg, .png" on:change={(e) => onFileSelected(e)} bind:this={fileInput} />
                </div>

                <div class="mx-1.5 mt-2" id="categoryInputBox">
                    <MultiselectCategoryInput
                        style=""
                        data={categories}
                        placeholder="Kategoria"
                        inputId="categorySelect"
                        bind:selected={categoryValue}
                    />
                </div>
                <p class="text-red-500 text-sm mt-1 mx-8 hidden" id="categoryErrorMsg">Musisz wybrać kategorię</p>

                <div class="bg-tea mx-1.5 my-4 p-2 rounded-lg">
                    <div id="cityInputBox" class="pb-2">
                        <SelectCityInput
                            fetch="http://localhost:8080/api/locationsNonPost?nameSearch=[query]"
                            placeholder="Miasto"
                            inputId="citySelect"
                            bind:selected={cityValue}
                        />
                        <p class="text-red-500 text-sm mx-4 hidden" id="cityErrorMsg">Musisz wybrać miasto</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <Button class="px-6 py-1 mt-2 mb-4 text-xl" clickHandler={openSpotPicker}
                            >{$selectedLatitude === 0 ? 'Wybierz' : 'Zmień'} miejsce</Button
                        >
                        <p class="hidden peer-invalid:block text-red-500 text-sm mx-8 mb-2" id="spotErrorMsg">Musisz wybrać lokalizację</p>
                    </div>
                    <div class="flex flex-col mt-2 text-pine">
                        <p class="text-lg">Data rozpoczęcia</p>
                        <div class="flex flex-row">
                            <div class="py-1 mr-0.5 object-left flex-1">
                                <PostDateInput bind:value={startDateValue} />
                            </div>
                            <div class="py-1 ml-0.5 object-right flex-1">
                                <PostTimeInput bind:value={startTimeValue} />
                            </div>
                        </div>
                    </div>
                    <p class="text-red-500 text-sm mx-2 hidden mb-2" bind:this={startDateTimeErrorMessage}>Data musi być w przyszłości</p>

                    <div class="flex flex-col mt-2 text-pine">
                        <p class="text-lg">Data zakończenia</p>
                        <div class="flex flex-row">
                            <div class="py-1 mr-0.5 object-left flex-1">
                                <PostDateInput bind:value={endDateValue} />
                            </div>
                            <div class="py-1 ml-0.5 object-right flex-1">
                                <PostTimeInput bind:value={endTimeValue} />
                            </div>
                        </div>
                    </div>
                    <p class="text-red-500 text-sm mx-2 hidden mb-2" bind:this={endDateTimeErrorMessage}>Data musi być w przyszłości</p>
                    <p class="text-red-500 text-sm mx-2 hidden mb-2" bind:this={endDateAfterStartDateErrorMessage}>
                        Data zakończenia musi być po dacie rozpoczęcia
                    </p>

                    <div class="mt-4">
                        <PeopleLimitInput bind:value={peopleLimitValue} />
                    </div>
                    <p class="hidden peer-invalid:block text-red-500 text-sm my-2" id="peopleLimitErrorMsg">Limit osób musi być dodatni</p>
                </div>

                <PostDescription placeholder="Opis" bind:value={descriptionValue} maxLength={10000} />
                <p class="hidden peer-invalid:block text-red-500 text-sm mx-8 mb-2" id="descriptionErrorMsg">Opis nie może być pusty</p>

                <PostDescription placeholder="Harmonogram" bind:value={scheduleValue} maxLength={5000} />
                <p class="hidden peer-invalid:block text-red-500 text-sm mx-8 mb-2" id="scheduleErrorMsg">Harmonogram nie może być pusty</p>
            </div>
            <div class="">
                <Button class="px-6 py-1 mt-2 mb-4 text-xl" clickHandler={handleSubmit}>Stwórz wydarzenie</Button>
            </div>
        </div>
    </div>
    {#if isSpotPickerActive}
        <dialog
            class="rounded-2xl mx-auto p-4 flex flex-col bg-ivory text-cocoa z-[1]
    border-2 border-pine w-1/2 absolute top-1/2"
        >
            <div class="flex flex-row-reverse">
                <button
                    on:click={closeModal}
                    class="rounded-full p-4 bg-pickle text-ivory hover:opacity-80 transition ease-in-out
    focus:ring focus:ring-tea font-bold h-12 w-12"
                >
                    X
                </button>
            </div>
            <div class="flex flex-col items-center">
                <div
                    class="absolute rounded-lg text-ivory bg-red-700 left-1/2 mx-auto bottom-10 h-16 w-48 lg:h-24 lg:w-72 z-[9999] opacity-0
    transition ease-in-out delay-300 font-bold border-2 border-cocoa px-4 py-2 transform -translate-x-1/2 pointer-events-none"
                    id="tooFarToast"
                >
                    <p>Za daleko od wybranego miasta!</p>
                </div>
                <div use:mapAction class="w-[40rem] h-64" />
            </div>
            <p class="hidden peer-invalid:block text-red-500 text-sm mx-8 mb-2" id="spotErrorMsg">Musisz wybrać lokalizację</p>
            <Button clickHandler={submitChoice} class="absolute bottom-2 right-2 h-12 w-12"><MdCheck /></Button>
        </dialog>
    {/if}
</div>
