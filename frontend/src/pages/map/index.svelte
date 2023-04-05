<script defer lang="ts">
    import * as L from 'leaflet';
    import 'leaflet/dist/leaflet.css';

    import execute from '../../lib/fetchWrapper';

    import Header from '../../lib/Header/Header.svelte';
    import Footer from '../../lib/Footer/Footer.svelte';

    let map;
    let mapMarkers = null;

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

    function createMarkers(markerData, map) {
        if (mapMarkers !== null) {
            mapMarkers.clearLayers();
        }

        let newMarkers = [];
        markerData.forEach((loc) => {
            let newMarker = L.marker(loc.point.coordinates.reverse(), { interactive: true });
            newMarker.on('click', (e) => newMarker.bindTooltip(loc.city.name).openTooltip());
            newMarkers.push(newMarker);
        });

        mapMarkers = L.layerGroup(newMarkers).addTo(map);
    }

    function mapAction(container) {
        map = createMap(container);

        map.on('moveend', () => {
            const coords = map.getBounds();
            const upperLat = coords._northEast.lat;
            const lowerLat = coords._southWest.lat;
            const leftLon = coords._southWest.lng;
            const rightLon = coords._northEast.lng;

            let urlParams = new URLSearchParams();
            urlParams.append('upperLat', upperLat);
            urlParams.append('lowerLat', lowerLat);
            urlParams.append('leftLon', leftLon);
            urlParams.append('rightLon', rightLon);

            execute(`map/getLocationsInBox?${urlParams.toString()}`, 'GET')
                .then((r) => r.json())
                .then((r) => createMarkers(r, map));
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
    <div use:mapAction class="h-[calc(100%-8rem)] lg:h-[calc(100%-4rem)]" />
    <Footer pageType="main" />
</div>
