<script lang="ts">
    import MdAdd from 'svelte-icons/md/MdAdd.svelte';

    // import AddPostButton from '../../lib/AddPostButton/AddPostButton.svelte';
    import MeetingCreator from '../../lib/MeetingCreator/MeetingCreator.svelte';
    import MeetingListElem from '../../lib/Meetings/MeetingListElem.svelte';
    import Footer from '../../lib/Footer/Footer.svelte';
    import Header from '../../lib/Header/Header.svelte';
    import HelpButton from '../../lib/HelpButton/HelpButton.svelte';
    import SortFilterBanner from '../../lib/SortFilterBanner/SortFilterBanner.svelte';
    import SortFilterColumn from '../../lib/SortFilterColumn/SortFilterColumn.svelte';
    import execute from '../../lib/fetchWrapper';
    import { filteredCategoryIds, filteredLocationIds, sortingOption, nameSearchParam, clearFilters } from '../../lib/stores';
    import { userDetails } from '../../lib/stores.js';
    import { writable } from 'svelte/store';

    let data = [];
    let selected: number | null = null;
    let sortOptions = [
        { id: 1, name: 'Od najnowszych' },
        { id: 2, name: 'Od najstarszych' },
        { id: 3, name: 'Po liczbie zapisanych rosnąco' },
        { id: 4, name: 'Po liczbie zapisanych malejąco' },
        { id: 5, name: 'Najbliżej daty rozpoczęcia' }
    ];
    let meetingsPromise: Promise<any>;
    let page: number = 0;

    let isCreatorOpen = writable(false);

    clearFilters();

    const viewDetails = (postId) => {
        if (selected !== postId) {
            selected = postId;
        } else {
            selected = null;
        }
    };

    const infiniteScroll = () => {
        const meetingsContainer = document.getElementById('postsContainer');

        if (meetingsContainer.offsetHeight + meetingsContainer.scrollTop === meetingsContainer.scrollHeight) {
            page = page + 1;
        }
    };

    const retrieveMeetings = (page: number, urlParams: URLSearchParams) => {
        execute(`meetings?page=${page}&` + urlParams.toString(), 'GET')
            .then((r) => r.json())
            .then((r) => (data = [...data, ...r]));
    };

    const openCreatorModal = () => {
        $isCreatorOpen = true;
    };

    $: {
        $filteredCategoryIds;
        $filteredLocationIds;
        $sortingOption;
        $nameSearchParam;
        data = [];
        page = 0;
    }

    $: {
        let urlParams = new URLSearchParams();
        for (let categoryId of $filteredCategoryIds) {
            urlParams.append('categoryIds', categoryId);
        }
        for (let locationId of $filteredLocationIds) {
            urlParams.append('locationIds', locationId.id);
        }
        if ($sortingOption !== null) {
            urlParams.append('sortOption', $sortingOption.toString());
        }
        if ($nameSearchParam !== null) {
            urlParams.append('nameSearch', $nameSearchParam);
        }

        retrieveMeetings(page, urlParams);
    }
</script>

<div class="h-screen">
    <Header pageType="meetings" />
    <HelpButton>
        <p>Na tej stronie możesz wykonać następujące rzeczy:</p>
        <ul class="list-disc list-inside">
            <li>
                <span class="font-bold">Przeglądanie postów</span> - znajduje się na środku strony, pozwala na zapoznanie się z treścią i szczegółami postów,
                klikając na nie na liście. Można też zobaczyć informacje o autorze posta, zapisać się lub wypisać z posta oraz przejść na profil autora.
            </li>
            <li>
                <span class="font-bold">Filtrowanie</span> - znajduje się po lewej stronie strony, pozwala na ograniczenie liczby postów, wybierając kategorię,
                miejscowość lub nazwę posta. Można też posortować posty według daty lub liczby zapisanych.
            </li>
            <li>
                <span class="font-bold">Tworzenie</span> - znajduje się w prawym dolnym rogu strony, pozwala na dodawanie własnych postów, wypełniając
                formularz z tytułem, kategorią, opisem i innymi informacjami. Tworzenie dostępne jest tylko dla zalogowanych użytkowników.
            </li>
        </ul>
    </HelpButton>
    <SortFilterBanner {sortOptions} />
    <div
        class="bg-black opacity-0 w-full h-[calc(100%-10rem)] lg:h-[calc(100%-4rem)] z-[1] absolute transition ease-in-out duration-300
        {$isCreatorOpen ? 'opacity-50' : 'hidden opacity-0'}"
    />
    <div class="h-[calc(100%-10rem)] lg:h-[calc(100%-4rem)] lg:flex lg:flex-row" on:scroll={infiniteScroll} id="postsContainer">
        <div class="hidden lg:block lg:w-1/3 lg:bg-green-mist overflow-auto">
            <SortFilterColumn {sortOptions} />
        </div>
        <div class="flex flex-col h-full lg:w-2/3 overflow-auto">
            {#await meetingsPromise then _}
                {#each data as item}
                    <MeetingListElem areDetailsShown={selected === item.id} data={item} clickHandler={() => viewDetails(item.id)} />
                {/each}
            {/await}
        </div>
        <div class="hidden lg:block lg:w-1/3" />
    </div>
    {#if $userDetails !== null}
        {#if $isCreatorOpen}
            <MeetingCreator isOpen={isCreatorOpen} />
        {:else}
            <button class="absolute rounded-full bg-grass bottom-20 right-4 h-12 w-12 lg:h-20 lg:w-20 lg:right-20" on:click={openCreatorModal}>
                <div class="h-8 w-8 ml-auto mr-auto lg:w-12 lg:h-12 text-cocoa">
                    <MdAdd />
                </div>
            </button>
        {/if}
        <!-- <AddPostButton pageType="announcements" /> -->
    {/if}
    <Footer pageType="meetings" />
</div>
