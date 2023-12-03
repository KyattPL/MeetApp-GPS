<script>
    import { DatePicker } from 'attractions';

    export let value = null;
</script>

<!-- <input
    type="text"
    onfocus="(this.type = 'date')"
    id="post-date"
    class="bg-ivory text-gray
px-2 py-3 text-2xl rounded-lg w-40 block
focus:outline-none focus:border-tea focus:ring-1 focus:ring-tea focus:text-cocoa"
    placeholder="Data"
    bind:value
    required
/> -->
<DatePicker
    bind:value
    closeOnSelection
    format="%d/%m/%Y"
    locale="pl-PL"
    inputClass="!bg-ivory !text-gray !px-2 !py-3 !rounded-lg !block !border-none
    !focus:outline-none !focus:border-tea !focus:ring-1 !focus:ring-tea !focus:text-cocoa"
/>

<style>
    .date-picker .open {
        border: none;
    }

    :global(.date-picker) :global(.text-field) {
        width: auto !important;
    }

    :global(.month-header) {
        color: #4d6753 !important;
    }

    :global(.week) :global(.selected) :global(.btn) {
        background-color: #4d6753 !important;
    }
    :global(.week) :global(.btn:hover) {
        background-color: rgba(77, 102, 83, 0.2) !important;
    }

    :global(.month-header) :global(.btn) {
        color: #4d6753 !important;
    }

    :global(.month-header) :global(.btn:hover) {
        background: rgba(77, 102, 83, 0.2) !important;
    }

    :global(.month-header) :global(.btn:focus) {
        background: rgba(77, 102, 83, 0.2) !important;
    }

    :global(.month-header) :global(.btn:active) {
        background: rgba(77, 102, 83, 0.2) !important;
    }

    :global(.month-header) :global(.btn) :global(.ripple-container) {
        visibility: hidden;
    }
</style>
