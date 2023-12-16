<script lang="ts">
    import AddPostButton from '../../lib/AddPostButton/AddPostButton.svelte';
    import AnnouncementListElem from '../../lib/Announcements/AnnouncementListElem/AnnouncementListElem.svelte';
    import Footer from '../../lib/Footer/Footer.svelte';
    import Header from '../../lib/Header/Header.svelte';
    import HelpButton from '../../lib/HelpButton/HelpButton.svelte';
    import SortFilterBanner from '../../lib/SortFilterBanner/SortFilterBanner.svelte';
    import SortFilterColumn from '../../lib/SortFilterColumn/SortFilterColumn.svelte';
    import execute from '../../lib/fetchWrapper';
    import { filteredCategoryIds, filteredLocationIds, sortingOption, nameSearchParam, clearFilters } from '../../lib/stores';
    import { userDetails } from '../../lib/stores.js';

    import { afterPageLoad } from '@roxi/routify';
    import { fade } from 'svelte/transition';

    let wasPostChanged = false;
    let toastText = '';

    $afterPageLoad((p) => {
        let lastVisited = p.__file.last.shortPath;
        if (lastVisited === '/announcements/create') {
            wasPostChanged = true;
            toastText = 'Pomyślnie utworzono post!';
        } else if (lastVisited === '/announcements/edit') {
            wasPostChanged = true;
            toastText = 'Pomyślnie edytowano post!';
        }
        return true;
    });

    let data = [];
    let selected: number | null = null;
    let sortOptions = [
        { id: 1, name: 'Od najnowszych' },
        { id: 2, name: 'Od najstarszych' },
        { id: 3, name: 'Po liczbie zapisanych rosnąco' },
        { id: 4, name: 'Po liczbie zapisanych malejąco' }
    ];
    let announcementsPromise: Promise<any>;
    let page: number = 0;

    clearFilters();

    const viewDetails = (postId) => {
        if (selected !== postId) {
            selected = postId;
        } else {
            selected = null;
        }
    };

    const infiniteScroll = () => {
        const postsContainer = document.getElementById('postsContainer');

        if (postsContainer.offsetHeight + postsContainer.scrollTop === postsContainer.scrollHeight) {
            page = page + 1;
        }
    };

    const retrieveAnnouncements = (page: number, urlParams: URLSearchParams) => {
        execute(`announcements?page=${page}&` + urlParams.toString(), 'GET')
            .then((r) => r.json())
            .then((r) => (data = [...data, ...r]));
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

        retrieveAnnouncements(page, urlParams);
    }
</script>

<div class="h-screen">
    <Header pageType="announcements" />
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
    {#if wasPostChanged}
        <div class="flex flex-row bg-grass w-72 h-16 m-auto rounded p-4 absolute bottom-8 right-8" out:fade={{ delay: 50, duration: 300 }}>
            <p class="w-full text-center text-ivory self-center">{toastText}</p>
            <button class="text-ivory font-bold" on:click={() => (wasPostChanged = false)}>X</button>
        </div>
    {/if}
    <div class="h-[calc(100%-10rem)] lg:h-[calc(100%-4rem)] lg:flex lg:flex-row" on:scroll={infiniteScroll} id="postsContainer">
        <div class="hidden lg:block lg:w-1/3 lg:bg-green-mist overflow-auto">
            <SortFilterColumn {sortOptions} />
        </div>
        <div class="flex flex-col h-full lg:w-2/3 overflow-auto">
            {#await announcementsPromise then _}
                {#each data as item}
                    <AnnouncementListElem areDetailsShown={selected === item.id} data={item} clickHandler={() => viewDetails(item.id)} />
                {/each}
            {/await}
        </div>
        <div class="hidden lg:block lg:w-1/3" />
    </div>
    {#if $userDetails !== null}
        <AddPostButton pageType="announcements" />
    {/if}
    <Footer pageType="announcements" />
</div>
