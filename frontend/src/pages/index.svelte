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
            <li>
                <span class="text-grass font-black">Ogłoszenie</span> - to rodzaj posta, który służy do informowania innych użytkowników o jakiejś sprawie,
                ofercie lub zaproszeniu. Ogłoszenie dotyczy konkretnego miejsca, np. szkoły, biura, parku itp., ale nie ma określonej daty, kiedy ma się
                odbyć lub zakończyć. Ogłoszenie nie ma też określonego limitu osób, które mogą się do niego zgłosić lub skorzystać z niego. Przykład ogłoszenia:
                “Sprzedam używany rower w dobrym stanie. Odbiór osobisty w centrum miasta. Cena do negocjacji.”
            </li>
            <li>
                <span class="text-pickle font-black">Spotkanie</span> - to rodzaj posta, który służy do umówienia się z konkretnymi osobami w danym miejscu
                o konkretnej porze. Spotkanie może mieć określony cel, np. wspólna nauka, praca nad projektem, wymiana doświadczeń itp. Spotkanie może
                mieć też określony limit osób, które mogą się do niego zapisać lub uczestniczyć w nim. Przykład spotkania: “Zapraszam na spotkanie grupy
                wsparcia dla osób z depresją. Spotykamy się w poniedziałek o 18:00 w sali nr 12 w Domu Kultury. Liczba miejsc ograniczona, proszę o wcześniejsze
                zgłoszenie.”
            </li>
            <li>
                <span class="text-pine font-black">Wydarzenie</span> - to rodzaj posta, który służy do zaproszenia innych użytkowników na jakąś imprezę,
                festiwal, konferencję itp. Wydarzenie może odbywać się na przestrzeni wielu dni, obejmować więcej osób i zawierać harmonogram imprezy.
                Przykład wydarzenia: “Serdecznie zapraszamy na Festiwal Filmowy w naszym kinie. Od 1 do 10 grudnia będziemy pokazywać najlepsze filmy z
                całego świata. Sprawdź nasz program i zarezerwuj bilety online.”
            </li>
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
