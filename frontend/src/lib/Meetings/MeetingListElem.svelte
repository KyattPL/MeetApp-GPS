<script lang="ts">
    import { slide } from 'svelte/transition';

    import FaCalendarAlt from 'svelte-icons/fa/FaCalendarAlt.svelte';
    import FaMapMarkedAlt from 'svelte-icons/fa/FaMapMarkedAlt.svelte';
    import MdAccessTime from 'svelte-icons/md/MdAccessTime.svelte';
    import MdPeople from 'svelte-icons/md/MdPeople.svelte';
    import Button from '../../lib/Button/Button.svelte';
    import execute from '../fetchWrapper';
    import { url } from '@roxi/routify';
    import { userDetails } from '../stores.js';

    export let data;
    export let areDetailsShown: boolean;
    export let clickHandler: () => void;

    let isEnrolled = false;

    const checkEnrolledStatus = () => {
        if ($userDetails !== null) {
            execute(`meetings/isEnrolled/${data.id}`, 'GET')
                .then((r) => r.json())
                .then((r) => (isEnrolled = r));
        }
    };

    const isAuthor = () => {
        return $userDetails !== null && $userDetails.id === data.author.id;
    };

    const enroll = () => {
        execute(`meetings/enroll/${data.id}`, 'GET').then((_) => checkEnrolledStatus());
    };

    const unenroll = () => {
        execute(`meetings/unenroll/${data.id}`, 'GET').then((_) => checkEnrolledStatus());
    };

    checkEnrolledStatus();
</script>

<div class="{isEnrolled ? 'bg-tusk' : 'bg-olive'} rounded-2xl m-2 p-2">
    <div class="flex flex-col">
        <button on:click={clickHandler} class="hover:cursor-pointer">
            <div class="font-bold text-left text-cocoa">
                {data.title}
            </div>
            <div class="flex flex-row items-center">
                <div class="w-6 mx-2 text-cocoa">
                    <FaMapMarkedAlt />
                </div>
                <div class="text-cocoa text-left">
                    {data.location.city.name}, {data.location.voivodeship.name}
                </div>
            </div>
            <div class="flex flex-row">
                <div class="w-6 mx-2 text-cocoa">
                    <FaCalendarAlt />
                </div>
                <div class="text-cocoa">
                    {data.meetingDateTime.date}
                </div>
                <div class="w-6 mx-2 text-cocoa">
                    <MdAccessTime />
                </div>
                <div class="text-cocoa">
                    {data.meetingDateTime.time}
                </div>
            </div>
            <div class="flex flex-row">
                <div class="w-6 mx-2 text-cocoa">
                    <MdPeople />
                </div>
                <div class="text-orange">
                    {data.enrolled} &nbsp;
                </div>
                <div class="text-cocoa">
                    {data.personQuota !== null ? '/ ' + data.personQuota : ''}
                </div>
            </div>
        </button>
        {#if areDetailsShown}
            <div transition:slide class="border-t-2 border-shadow text-cocoa">
                {data.description}
            </div>
            <a
                href={isAuthor() ? $url('/profile') : $url(`/profile/${data.author.id}`)}
                class="text-lg flex flex-row items-center"
                in:slide={{ delay: 100 }}
                out:slide
            >
                <div class="w-12 h-12 mr-2">
                    <img class="rounded-full" src={data.author.profilePicture} alt="Profile avatar" referrerpolicy="no-referrer" />
                </div>
                <div class="text-cocoa">
                    {data.author.firstName}
                    {data.author.lastName}
                </div>
            </a>
            {#if $userDetails !== null && !isAuthor()}
                <div class="self-center my-2" in:slide={{ delay: 100 }} out:slide>
                    {#if isEnrolled}
                        <Button class="text-base px-10 py-1 mx-12 my-2" clickHandler={unenroll}>Wypisuję się!</Button>
                    {:else}
                        <Button class="text-base px-10 py-1 mx-12 my-2" clickHandler={enroll}>Zapisuję się!</Button>
                    {/if}
                </div>
            {/if}
        {/if}
    </div>
</div>

<style>
    .border-shadow {
        border-color: rgba(0, 0, 0, 0.1);
    }
</style>
