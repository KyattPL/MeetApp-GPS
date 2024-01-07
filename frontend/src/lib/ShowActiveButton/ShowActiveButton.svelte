<script lang="ts">
    import { goto } from '@roxi/routify';

    import MdNotificationsActive from 'svelte-icons/md/MdNotificationsActive.svelte';

    let cssClass: string = '';
    export { cssClass as class };

    const navigateToActive = () => {
        $goto(`/events`);
    };
</script>

<button
    class="absolute rounded-full {cssClass} bg-grass bottom-36 right-4 h-12 w-12 lg:h-20 lg:w-20 lg:right-20 lg:bottom-20"
    on:click={navigateToActive}
>
    <div class="h-8 w-8 ml-auto mr-auto text-cocoa lg:w-12 lg:h-12">
        <MdNotificationsActive />
    </div>
    <span
        class="absolute bottom-5 bg-cocoa text-ivory rounded p-2 right-24 w-max opacity-0 transition-opacity group-hover:opacity-100 hidden group-hover:inline"
        >Pokaż aktualne wydarzenia</span
    >
    <span
        class="absolute h-0 w-0 bottom-8 right-[5.5rem] border-l-cocoa border-y-8 border-y-transparent border-l-8 opacity-0 transition-opacity group-hover:opacity-100 hidden group-hover:inline"
    />
</button>
