<script lang="ts">
    export let placeholder;
    export let maxLength = 0;
    export let value;

    $: {
        if (value !== null && value.length > maxLength) {
            value = value.slice(0, maxLength);
        }
    }
</script>

<div class="bg-ivory mx-1.5 my-4">
    <input
        type="text"
        id="post-name"
        class="bg-ivory border-2 border-pickle text-gray
    px-2 py-3 text-2xl rounded-lg w-full block
    focus:outline-none focus:border-pickle focus:ring-1 focus:ring-pickle focus:text-cocoa"
        {placeholder}
        required
        bind:value
    />
</div>
