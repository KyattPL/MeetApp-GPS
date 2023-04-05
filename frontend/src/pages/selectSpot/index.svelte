<script defer lang="ts">
    import * as L from 'leaflet';
    import 'leaflet/dist/leaflet.css';
    import MdCheck from 'svelte-icons/md/MdCheck.svelte';

    import { selectedLatitude, selectedLongitude } from '../../lib/stores';

    import Header from '../../lib/Header/Header.svelte';
    import Footer from '../../lib/Footer/Footer.svelte';

    let map;
    let marker;

    function submitChoice() {
        let coords = map.getCenter();
        $selectedLatitude = coords.lat;
        $selectedLongitude = coords.lng;
    }

    function createMap(container) {
        let m = L.map(container).setView([51.107883, 17.038538], 13);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>,
          &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
            subdomains: 'abcd',
            maxZoom: 17
        }).addTo(m);

        return m;
    }

    function mapAction(container) {
        map = createMap(container);

        marker = L.marker(map.getCenter(), {
            draggable: true,
            autoPan: true
        }).addTo(map);

        map.on('move', () => {
            marker.setLatLng(map.getCenter());
        });

        return {
            destroy: () => {
                map.remove();
            }
        };
    }
</script>

<div class="h-screen">
    <Header pageType="main" />
    <button class="absolute rounded-full bg-grass bottom-20 right-4 h-12 w-12 lg:h-20 lg:w-20 lg:right-20 z-[9999]" on:click={submitChoice}>
        <div class="h-8 w-8 ml-auto mr-auto lg:w-12 lg:h-12 text-cocoa">
            <MdCheck />
        </div>
    </button>
    <div use:mapAction class="h-[calc(100%-8rem)] lg:h-[calc(100%-4rem)]" />
    <Footer pageType="main" />
</div>
