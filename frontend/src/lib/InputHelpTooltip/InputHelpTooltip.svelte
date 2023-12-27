<script lang="ts">
    import MdHelp from 'svelte-icons/md/MdHelp.svelte';

    export let text = '';
    export let style = '';
</script>

<div class="group">
    <button class="relative rounded-full bg-gray top-0 right-2 p-1 h-8 w-8 {style}">
        <div class="h-5 w-5 m-auto text-black">
            <MdHelp />
        </div>
        <span
            class="absolute -bottom-1 p-2 right-10 bg-gray text-black rounded w-max hidden opacity-0 transition-all group-hover:opacity-100 group-hover:inline"
            >{text}</span
        >
        <span
            class="absolute h-0 w-0 bottom-2 right-8 border-l-gray border-y-8 border-y-transparent hidden border-l-8 opacity-0 transition-all group-hover:opacity-100 group-hover:inline"
        />
    </button>
</div>
