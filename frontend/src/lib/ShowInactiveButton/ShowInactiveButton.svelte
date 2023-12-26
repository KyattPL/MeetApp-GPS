<script lang="ts">
    import { goto } from '@roxi/routify';

    import MdNotificationsOff from 'svelte-icons/md/MdNotificationsOff.svelte';

    let cssClass: string;
    export { cssClass as class };

    const navigateToInactive = () => {
        $goto(`/eventsInactive`);
    };
</script>

<button class="absolute rounded-full bg-grass right-4 h-12 w-12 {cssClass} lg:h-20 lg:w-20 lg:right-20 lg:bottom-48" on:click={navigateToInactive}>
    <div class="h-8 w-8 ml-auto mr-auto text-cocoa lg:w-12 lg:h-12">
        <MdNotificationsOff />
    </div>
    <span class="absolute bottom-5 bg-cocoa text-ivory rounded p-2 right-24 w-max opacity-0 transition-opacity group-hover:opacity-100"
        >Pokaż wygasłe wydarzenia</span
    >
    <span
        class="absolute h-0 w-0 bottom-8 right-[5.5rem] border-l-cocoa border-y-8 border-y-transparent border-l-8 opacity-0 transition-opacity group-hover:opacity-100"
    />
</button>
