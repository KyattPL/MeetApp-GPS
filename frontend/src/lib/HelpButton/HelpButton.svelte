<script lang="ts">
    import MdHelp from 'svelte-icons/md/MdHelp.svelte';

    let isModalOpen: boolean = false;

    const openModal = () => (isModalOpen = true);

    const closeModal = () => (isModalOpen = false);
</script>

<div class="group">
    <button class="absolute rounded-full bg-grass bottom-20 right-4 h-12 w-12 lg:h-20 lg:w-20 lg:right-20" on:click={openModal}>
        <div class="h-8 w-8 ml-auto mr-auto lg:w-12 lg:h-12 text-cocoa">
            <MdHelp />
        </div>
        <span class="absolute bottom-5 bg-cocoa text-ivory rounded p-2 right-24 w-max opacity-0 transition-opacity group-hover:opacity-100"
            >Pomoc</span
        >
        <span
            class="absolute h-0 w-0 bottom-8 right-[5.5rem] border-l-cocoa border-y-8 border-y-transparent border-l-8 opacity-0 transition-opacity group-hover:opacity-100"
        />
    </button>
</div>
<div
    class="bg-black opacity-0 w-full h-[calc(100%-10rem)] lg:h-[calc(100%-4rem)] z-[1] absolute transition ease-in-out duration-300
    {isModalOpen ? 'opacity-50' : 'hidden opacity-0'}"
/>
{#if isModalOpen}
    <dialog
        class="rounded-2xl m-auto py-4 pl-4 pr-16 flex flex-col bg-ivory text-cocoa z-[1]
border-2 border-pine w-1/2 absolute top-0 bottom-0 min-h-[8rem]"
    >
        <div class="absolute top-4 right-4">
            <button
                on:click={closeModal}
                class="rounded-full p-4 bg-pickle text-ivory hover:opacity-80 transition ease-in-out
focus:ring focus:ring-tea font-bold h-12 w-12"
            >
                X
            </button>
        </div>
        <slot />
    </dialog>
{/if}
