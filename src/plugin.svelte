<script lang="ts">
    import { map } from '@windy/map';

    import { onMount, onDestroy } from 'svelte';

    import { boatIcon } from './boatIcon';

    // IMPORTANT: all types must be imported as `type` otherwise
    // Svelte TS compiler will fail
    import type { Polarstern, ExtendedMarker } from './boatTypes';

    let markers: ExtendedMarker[] = [];
    let lines: L.Polyline[] = [];

    const loadResults = () => {
        fetch('http://localhost:3000', {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        })
            .then(response => response.json())
            .then((result: Polarstern) => {
                const max_positions = 2000;
                const track: [number, number][] = result.sensor.map(v => {
                    return [v.latitude, v.longitude];
                });

                let track_to_draw = null;

                if (track.length > max_positions) {
                    track_to_draw = track.slice(track.length - (max_positions + 1), max_positions);
                } else {
                    track_to_draw = track;
                }
                console.debug(track_to_draw);
                const hue = 60 % 360;
                const color = `hsl(${hue}, 100%, 45%)`;
                console.debug(track);
                const layer = new L.Polyline(track_to_draw, {
                    color,
                    weight: 2,
                }).addTo(map);

                layer.on('mouseover', () => layer.setStyle({ weight: 4 }));
                layer.on('mouseout', () => layer.setStyle({ weight: 2 }));

                const latestPosition = track_to_draw.reverse()[0];
                const marker = new L.Marker(latestPosition, {
                    icon: boatIcon,
                }).addTo(map);

                const sail = 'Polarstern';
                markers.push({ sail, marker, latestPosition });
            })
            .catch(console.error);
    };

    const removeAllMapFeatures = () => {
        markers.forEach(l => map.removeLayer(l.marker));
        lines.forEach(l => map.removeLayer(l));
        markers = [];
        lines = [];
    };

    export const onopen = () => {
        loadResults();
        map.setView([14, -29], 4);
    };

    onMount(() => {});

    onDestroy(() => {
        removeAllMapFeatures();
    });
</script>

<style lang="less">
    .plugin__content {
        padding-top: 5px;
    }
    .boat {
        padding-left: 7px;
        border-left: 5px solid;
        &__speed {
            white-space: nowrap;
        }
    }
    .mobile-boat-ui {
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow: auto;
    }
</style>
