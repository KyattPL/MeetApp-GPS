<script>
    import { TimePicker, Label } from 'attractions';

    export let value = null;
</script>

<!-- <input
    type="text"
    onfocus="(this.type = 'time')"
    id="post-person-limit"
    class="bg-ivory text-gray
px-2 py-3 text-2xl rounded-lg w-32 block
focus:outline-none focus:border-tea focus:ring-1 focus:ring-tea focus:text-cocoa"
    placeholder="Godzina"
    bind:value
    required
/> -->
<TimePicker
    bind:value
    inputClass="!bg-ivory !text-gray !px-2 !py-3 !rounded-lg !block !border-none
!focus:outline-none !focus:border-tea !focus:ring-1 !focus:ring-tea !focus:text-cocoa"
>
    <Label slot="hours-label">Godzina</Label>
    <Label slot="minutes-label">Minuta</Label>
    <Label slot="now-label">Teraz</Label>
</TimePicker>

<style>
    .time-picker .open {
        border: none;
    }

    :global(.time-picker) :global(.label) {
        color: #4d6753 !important;
    }

    :global(.time-picker) :global(.btn) {
        color: #4d6753 !important;
    }

    :global(.time-picker) :global(.selected) {
        background: rgba(77, 102, 83, 0.2) !important;
    }

    :global(.time-picker) :global(.btn:hover) {
        background: rgba(77, 102, 83, 0.2) !important;
    }

    :global(.time-picker) :global(.btn:focus) {
        background: rgba(77, 102, 83, 0.2) !important;
    }

    :global(.time-picker) :global(.btn:active) {
        background: rgba(77, 102, 83, 0.2) !important;
    }

    :global(.time-picker) :global(.btn) :global(.ripple-container) {
        visibility: hidden;
    }
</style>
