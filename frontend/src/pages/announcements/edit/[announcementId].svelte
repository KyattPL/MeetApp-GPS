<script lang="ts">
    import MdInfoOutline from 'svelte-icons/md/MdInfoOutline.svelte';
    import { redirect } from '@roxi/routify';

    import * as L from 'leaflet';
    import 'leaflet/dist/leaflet.css';
    import MdCheck from 'svelte-icons/md/MdCheck.svelte';

    import Button from '../../../lib/Button/Button.svelte';
    import Header from '../../../lib/Header/Header.svelte';
    import MultiselectCategoryInput from '../../../lib/MultiselectCategoryInput/MultiselectCategoryInput.svelte';
    import execute from '../../../lib/fetchWrapper';
    import SelectCityInput from '../../../lib/SelectCityInput/SelectCityInput.svelte';
    import PostNameInput from '../../../lib/PostNameInput/PostNameInput.svelte';
    import PostDescription from '../../../lib/PostDescription/PostDescription.svelte';
    import { userDetails, selectedLatitude, selectedLongitude } from '../../../lib/stores';
    import calculateDistanceBetweenCoords from '../../../lib/utils';

    export let announcementId: number;

    let title = null;

    let categoryValue = null;
    let cityValue = null;
    let descriptionValue = null;
    let isSpotPickerActive = false;

    let categories = [];

    let map;
    let marker;

    if ($userDetails === null) {
        $redirect('/login');
    }

    execute(`users/isAuthor/${announcementId}`, 'GET')
        .then((r) => r.text())
        .then((r) => {
            r === 'false' ? $redirect('/announcements') : null;
        });

    execute('categories', 'GET')
        .then((r) => r.json())
        .then((r) => (categories = r));

    let promise = execute(`announcements/${announcementId}`, 'GET')
        .then((r) => r.json())
        .then((r) => {
            descriptionValue = r.description;
            categoryValue = r.categories.map((c) => c.id);
            console.log(r);
            cityValue = {
                id: r.location.id,
                city: r.location.city.name,
                voivodeship: r.location.voivodeship.name,
                lat: r.location.point.cooridnates[0],
                lng: r.location.point.cooridnates[1]
            };

            $selectedLatitude = cityValue.lat;
            $selectedLongitude = cityValue.lng;

            title = r.title;
        });

    const validateCategory = () => {
        let errorMsg = document.getElementById('categoryErrorMsg');
        let svControl = document.getElementById('categoryInputBox').children[0].children[0];
        if (categoryValue === null || categoryValue.length === 0) {
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

    const validateDescription = () => {
        let errorMessage = document.getElementById('descriptionErrorMsg');
        if (descriptionValue === null || descriptionValue.length < 1 || descriptionValue.length > 200) {
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
        if (title === null || title.length < 5 || title.length > 50) {
            errorMessage.classList.remove('hidden');
            return false;
        }
        errorMessage.className += ' hidden';
        return true;
    };

    const handleSubmit = () => {
        if (validateTitle() && validateCategory() && validateCity() && validateSpot() && validateDescription()) {
            let requestBody = {
                cityId: cityValue.city.id,
                voivodeshipId: cityValue.voivodeship.id,
                latitude: $selectedLatitude,
                longitude: $selectedLongitude,
                locationId: cityValue.id,
                title: title,
                description: descriptionValue,
                categoryIds: categoryValue
            };
            $selectedLongitude = 0;
            $selectedLatitude = 0;
            execute(`announcements/${announcementId}`, 'PUT', requestBody).then((r) => $redirect('/announcements'));
        }
    };

    function submitChoice() {
        let coords = map.getCenter();
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
        let m = L.map(container).setView([cityValue.lat, cityValue.lng], 13);
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

        marker = L.marker(map.getCenter(), {
            draggable: true,
            autoPan: true,
            icon: customIcon
        }).addTo(map);

        map.on('move', () => {
            marker.setLatLng(map.getCenter());
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

    $: {
        cityValue;
    }
</script>

{#if isSpotPickerActive}
    <div class="h-screen">
        <Header pageType="main" />
        <button class="absolute rounded-full bg-grass bottom-20 right-4 h-12 w-12 lg:h-20 lg:w-20 lg:right-20 z-[9999]" on:click={submitChoice}>
            <div class="h-8 w-8 ml-auto mr-auto lg:w-12 lg:h-12 text-cocoa">
                <MdCheck />
            </div>
        </button>
        <div
            class="absolute rounded-lg text-ivory bg-red-700 left-1/2 mx-auto bottom-10 h-16 w-48 lg:h-24 lg:w-72 z-[9999] opacity-0
    transition ease-in-out delay-300 font-bold border-2 border-cocoa px-4 py-2 transform -translate-x-1/2 pointer-events-none"
            id="tooFarToast"
        >
            <p>Za daleko od wybranego miasta!</p>
        </div>
        <div use:mapAction class="h-[calc(100%-4rem)] lg:h-[calc(100%-4rem)]" />
    </div>
{:else}
    <div class="h-screen">
        <Header />
        {#await promise then _}
            <div class="flex flex-col h-[calc(100%-4rem)] lg:w-1/3 lg:mx-auto overflow-auto justify-between items-center bg-ivory">
                <div class="w-full">
                    <PostNameInput placeholder="Nazwa ogłoszenia" bind:value={title} maxLength={50} />
                    <p class="hidden peer-invalid:block text-red-500 text-sm mx-8 mb-2" id="titleErrorMsg">Tytuł musi mieć 5-50 znaków</p>

                    <div class="mx-1.5 mt-2 categorySvelecteBox" id="categoryInputBox">
                        <MultiselectCategoryInput
                            style=""
                            data={categories}
                            placeholder="Kategoria"
                            inputId="categorySelect"
                            bind:selected={categoryValue}
                        />
                    </div>
                    <p class="text-red-500 text-sm mt-1 mx-4 hidden" id="categoryErrorMsg">Musisz wybrać kategorię</p>
                    <div class="bg-tea mx-1.5 my-4 p-2 rounded-xl" id="cityInputBox">
                        <SelectCityInput
                            fetch="http://meetapp.northeurope.cloudapp.azure.com:8080/api/locationsNonPost?nameSearch=[query]"
                            placeholder="Miasto"
                            inputId="citySelect"
                            bind:selected={cityValue}
                        />
                        <p class="text-red-500 text-sm mx-4 hidden" id="cityErrorMsg">Musisz wybrać miasto</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <Button class="px-6 py-1 mt-2 mb-4 text-xl" clickHandler={openSpotPicker}>Wybierz miejsce</Button>
                        <p class="hidden peer-invalid:block text-red-500 text-sm mx-8 mb-2" id="spotErrorMsg">Musisz wybrać lokalizację</p>
                    </div>
                    <div class="">
                        <PostDescription bind:value={descriptionValue} maxLength={200} placeholder="Opis" />
                        <p class="hidden peer-invalid:block text-red-500 text-sm mx-8 mb-2" id="descriptionErrorMsg">Opis nie może być pusty</p>
                    </div>
                    <div class="flex flex-row text-cocoa items-center mx-8 my-4">
                        <div class="w-10 mx-2">
                            <MdInfoOutline />
                        </div>
                        <p class="text-sm">Twoje ogłoszenie wygaśnie miesiąc po opublikowaniu</p>
                    </div>
                </div>
                <div class="">
                    <Button class="px-6 py-1 mt-2 mb-4 text-xl" clickHandler={handleSubmit}>Zapisz zmiany</Button>
                </div>
            </div>
        {/await}
    </div>
{/if}
