<script defer lang="ts">
    import * as L from 'leaflet';
    import 'leaflet/dist/leaflet.css';

    import Header from '../../lib/Header/Header.svelte';
    import Footer from '../../lib/Footer/Footer.svelte';

    let map;

    function createMap(container) {
        let m = L.map(container).setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>,
          &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
            subdomains: 'abcd',
            maxZoom: 14
        }).addTo(m);

        return m;
    }

    function mapAction(container) {
        map = createMap(container);
        return {
            destroy: () => {
                map.remove();
            }
        };
    }
</script>

<div class="h-screen">
    <Header pageType="meetings" />
    <div use:mapAction class="h-[calc(100%-8rem)] lg:h-[calc(100%-4rem)]" />
    <Footer pageType="meetings" />
</div>
