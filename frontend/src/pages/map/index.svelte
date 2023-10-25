<script defer lang="ts">
    import * as L from 'leaflet';
    import 'leaflet/dist/leaflet.css';

    import execute from '../../lib/fetchWrapper';

    import FaCalendarDay from 'svelte-icons/fa/FaCalendarDay.svelte';
    import MdAnnouncement from 'svelte-icons/md/MdAnnouncement.svelte';
    import MeetingSymbol from '../../assets/MeetingSymbol.svelte';

    import Header from '../../lib/Header/Header.svelte';
    import Footer from '../../lib/Footer/Footer.svelte';

    let map = null;
    let mapMarkers = null;
    let usersLatitude = null;
    let usersLongitude = null;

    let areEventsOn = true;
    let areMeetingsOn = true;
    let areAnnouncementsOn = true;

    let isRadiusFilterOn = false;
    let radiusInMeters = '0';
    let circle = null;

    let closedPopup = false;

    $: {
        areEventsOn;
        areAnnouncementsOn;
        areMeetingsOn;
        radiusInMeters;
        closedPopup;
        if (map !== null && !isRadiusFilterOn) {
            getLocationsBox();
        } else if (map !== null && isRadiusFilterOn) {
            getLocationsCircle();
        }
    }

    navigator.geolocation.getCurrentPosition((pos) => {
        usersLatitude = pos.coords.latitude;
        usersLongitude = pos.coords.longitude;
    });

    if (usersLatitude === null || usersLongitude === null) {
        console.log('Geolocation is not supported by this browser.');
        fetch(`http://ip-api.com/json/`)
            .then((r) => r.json())
            .then((r) => {
                usersLatitude = r.lat;
                usersLongitude = r.lon;
            });
    }

    function createMap(container) {
        let m = L.map(container).setView([usersLatitude, usersLongitude], 13);
        let customIcon = L.icon({ iconUrl: 'marker-user.png', iconSize: [25, 42] });
        L.marker([usersLatitude, usersLongitude], { icon: customIcon }).addTo(m);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>,
          &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
            subdomains: 'abcd',
            maxZoom: 17
        }).addTo(m);

        return m;
    }

    function createPopup(location) {
        if ('endDate' in location) {
            return `<div><div>${location.title}</div><a style='cursor: pointer' href='/events/${location.id}'>Przejdź do strony</a></div>`;
        } else {
            return `<div><div>${location.title}</div><a style='cursor: pointer' href='/user/${location.author.id}/posts'>Przejdź do postów użytkownika</a></div>`;
        }
    }

    function createMarkers(markerData, map) {
        if (mapMarkers !== null) {
            mapMarkers.clearLayers();
        }

        closedPopup = false;

        let customIcon = L.icon({ iconUrl: 'marker-user.png', iconSize: [25, 42] });
        let newMarkers = [];
        markerData.forEach((loc) => {
            console.log(loc);
            let newMarker = L.marker(loc.location.point.coordinates.reverse(), { interactive: true, icon: customIcon });
            newMarker
                .on('click', (e) => {
                    newMarker.bindPopup(createPopup(loc));
                })
                .openPopup();
            newMarkers.push(newMarker);
        });

        mapMarkers = L.layerGroup(newMarkers).addTo(map);
    }

    function mapAction(container) {
        map = createMap(container);

        map.on('moveend', () => {
            if (isRadiusFilterOn) {
                console.log('on');
                getLocationsCircle();
            } else {
                getLocationsBox();
            }
        });

        return {
            destroy: () => {
                map.remove();
            }
        };
    }

    function getLocationsCircle() {
        let urlParams = new URLSearchParams();
        urlParams.append('latitude', usersLatitude);
        urlParams.append('longitude', usersLongitude);
        urlParams.append('areEventsOn', areEventsOn.toString());
        urlParams.append('areMeetingsOn', areMeetingsOn.toString());
        urlParams.append('areAnnouncementsOn', areAnnouncementsOn.toString());
        urlParams.append('maxRange', radiusInMeters.toString());

        execute(`map/getLocationsInCircle?${urlParams.toString()}`, 'GET')
            .then((r) => r.json())
            .then((r) => createMarkers(r, map));
    }

    function getLocationsBox() {
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
        urlParams.append('areEventsOn', areEventsOn.toString());
        urlParams.append('areMeetingsOn', areMeetingsOn.toString());
        urlParams.append('areAnnouncementsOn', areAnnouncementsOn.toString());

        execute(`map/getLocationsInBox?${urlParams.toString()}`, 'GET')
            .then((r) => r.json())
            .then((r) => createMarkers(r, map));
    }

    function switchAnnouncement() {
        areAnnouncementsOn = !areAnnouncementsOn;
    }

    function switchMeeting() {
        areMeetingsOn = !areMeetingsOn;
    }

    function switchEvent() {
        areEventsOn = !areEventsOn;
    }

    function selectedRadius() {
        isRadiusFilterOn = radiusInMeters != '0';

        if (circle !== null) {
            circle.remove();
        }

        circle = L.circle([usersLatitude, usersLongitude], { radius: radiusInMeters }).addTo(map);
    }
</script>

<div class="h-screen">
    <Header pageType="map" />
    <div class="absolute z-[9999] top-20 right-6">
        <svg
            class="text-white bg-pine absolute top-0 right-0 m-2 pointer-events-none p-2 rounded"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="40px"
            height="40px"
            viewBox="0 0 38 22"
            version="1.1"
        >
            <g id="ZahnhelferDE—Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="ZahnhelferDE–Icon&amp;Asset-Download" transform="translate(-539.000000, -199.000000)" fill="#ffffff" fill-rule="nonzero">
                    <g id="Icon-/-ArrowRight-Copy-2" transform="translate(538.000000, 183.521208)">
                        <polygon
                            id="Path-Copy"
                            transform="translate(20.000000, 18.384776) rotate(135.000000) translate(-20.000000, -18.384776) "
                            points="33 5.38477631 33 31.3847763 29 31.3847763 28.999 9.38379168 7 9.38477631 7 5.38477631"
                        />
                    </g>
                </g>
            </g>
        </svg>
        <select
            bind:value={radiusInMeters}
            on:change={selectedRadius}
            id="radiusSelector"
            class="text-2xl font-bold rounded border-2 border-pine text-gray-600 h-14 w-48 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
        >
            <option selected value="0">+0 km</option>
            <option value="2000">+2 km</option>
            <option value="5000">+5 km</option>
            <option value="10000">+10 km</option>
            <option value="15000">+15 km</option>
        </select>
    </div>
    <button
        class="absolute rounded-full {areEventsOn
            ? 'bg-grass'
            : 'bg-gray'} border-pine border-2 bottom-64 right-4 h-12 w-12 lg:bottom-56 lg:h-20 lg:w-20 lg:right-20 z-[9999]"
        on:click={switchEvent}
    >
        <div class="h-8 w-8 p-1 ml-auto mr-auto lg:w-12 lg:h-12 text-cocoa">
            <FaCalendarDay />
        </div>
    </button>
    <button
        class="absolute rounded-full {areMeetingsOn
            ? 'bg-grass'
            : 'bg-gray'} border-pine border-2 bottom-44 right-4 h-12 w-12 lg:bottom-32 lg:h-20 lg:w-20 lg:right-20 z-[9999]"
        on:click={switchMeeting}
    >
        <div class="h-8 w-8 p-1 ml-auto mr-auto lg:w-12 lg:h-12 text-cocoa">
            <MeetingSymbol />
        </div>
    </button>
    <button
        class="absolute rounded-full {areAnnouncementsOn
            ? 'bg-grass'
            : 'bg-gray'} border-pine border-2 bottom-24 right-4 h-12 w-12 lg:bottom-8 lg:h-20 lg:w-20 lg:right-20 z-[9999]"
        on:click={switchAnnouncement}
    >
        <div class="h-8 w-8 p-1 ml-auto mr-auto lg:w-12 lg:h-12 text-cocoa">
            <MdAnnouncement />
        </div>
    </button>
    {#if usersLatitude !== null && usersLongitude !== null}
        <div use:mapAction class="h-[calc(100%-8rem)] lg:h-[calc(100%-4rem)]" />
    {/if}
    <Footer pageType="main" />
</div>
