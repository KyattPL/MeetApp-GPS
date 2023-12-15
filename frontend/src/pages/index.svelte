<script lang="ts">
    import FaCalendarDay from 'svelte-icons/fa/FaCalendarDay.svelte';
    import MdAnnouncement from 'svelte-icons/md/MdAnnouncement.svelte';
    import MeetingSymbol from '../assets/MeetingSymbol.svelte';
    import { url } from '@roxi/routify';

    import Header from '../lib/Header/Header.svelte';
    import HelpButton from '../lib/HelpButton/HelpButton.svelte';
</script>

<div class="h-screen">
    <Header />
    <HelpButton>
        <p>W <span class="text-pine font-black">MeetApp</span> rodzaje postów zostały podzielone na trzy kategorie:</p>
        <ul class="list-disc list-inside">
            <li><span class="text-grass font-black">Ogłoszenie</span> - elo elo</li>
            <li><span class="text-pickle font-black">Spotkanie</span> - elo elo</li>
            <li><span class="text-pine font-black">Wydarzenie</span> - elo elo</li>
        </ul>
    </HelpButton>
    <div class="flex flex-col h-[90%] overflow-auto lg:flex-row lg:justify-around">
        <a
            href={$url('/announcements')}
            class="p-8 mx-10 my-4 h-1/2 text-grass border-2 rounded-2xl flex flex-col text-center items-center justify-center
            hover:bg-grass hover:text-ivory transition ease-in-out delay-100 lg:h-1/2 lg:self-center lg:w-1/4"
        >
            <div class="w-10">
                <MdAnnouncement />
            </div>
            <div class="text-2xl">Ogłoszenia</div>
        </a>
        <a
            href={$url('/meetings')}
            class="p-8 mx-10 my-4 h-1/2 text-pickle border-2 rounded-2xl flex flex-col text-center items-center justify-center
            hover:bg-pickle hover:text-ivory transition ease-in-out delay-100 lg:h-1/2 lg:self-center lg:w-1/4"
        >
            <div class="w-10">
                <MeetingSymbol />
            </div>
            <div class="text-2xl">Spotkania</div>
        </a>
        <a
            href={$url('/events')}
            class="p-8 mx-10 my-4 h-1/2 text-pine border-2 rounded-2xl flex flex-col items-center justify-center
        hover:bg-pine hover:text-ivory transition ease-in-out delay-100 lg:h-1/2 lg:self-center lg:w-1/4"
        >
            <div class="w-10">
                <FaCalendarDay />
            </div>
            <div class="text-2xl">Wydarzenia</div>
        </a>
    </div>
</div>
