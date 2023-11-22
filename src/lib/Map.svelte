<script>
	import L, { simpleMapScreenshoter } from "leaflet";
	import MarkerPopup from "./MarkerPopup.svelte";
	import { getIconSvg } from "./scripts/IconLib";
	import { createEventDispatcher } from "svelte";
	import { SimpleMapScreenshoter } from "leaflet-simple-map-screenshoter";
	export let locations;

	let map;

	const dispatcher = createEventDispatcher();
	const initialView = [47.25761304887476, 9.81783795964424];

	const screenShotter = new SimpleMapScreenshoter();

	function createMap(container) {
		let m = L.map(container, { preferCanvas: true }).setView(
			initialView,
			10
		);

		m.createPane("snapshot-pane");

		L.tileLayer(
			"https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
			{
				attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>,
	        &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
				subdomains: "abcd",
				maxZoom: 20,
				pane: "snapshot-pane",
			}
		).addTo(m);

		return m;
	}

	function bindPopup(marker, createFn) {
		let popupComponent;
		marker.bindPopup(() => {
			let container = L.DomUtil.create("div");
			popupComponent = createFn(container);
			return container;
		});

		marker.on("popupclose", () => {
			if (popupComponent) {
				let old = popupComponent;
				popupComponent = null;
				// Wait to destroy until after the fadeout completes.
				setTimeout(() => {
					old.$destroy();
				}, 500);
			}
		});
	}

	let markers = new Map();

	function markerIcon(iconType) {
		let html =
			"<div class='bg-secondary rounded' style='width:20px; height:20px;--bs-bg-opacity: .5'>" +
			getIconSvg(iconType) +
			"</div>";
		return L.divIcon({
			html,
			className: "map-marker",
		});
	}

	function createMarker(loc) {
		let count = Math.ceil(Math.random() * 25);
		let icon = markerIcon(loc.locationType);
		let marker = L.marker(loc.pos, { icon });
		bindPopup(marker, (m) => {
			let c = new MarkerPopup({
				target: m,
				props: {
					locationData: loc,
				},
			});

			c.$on("change", ({ detail }) => {
				count = detail;
				marker.setIcon(markerIcon(count));
			});

			c.$on("showInList", ({ detail }) => {
				dispatcher("showInList", detail);
			});

			return c;
		});

		return marker;
	}

	let markerLayers;

	function mapAction(container) {
		map = createMap(container);

		screenShotter.addTo(map);

		markerLayers = L.layerGroup();

		locations.forEach((location) => {
			let m = createMarker(location);
			markerLayers.addLayer(m);
		});

		markerLayers.addTo(map);

		return {
			destroy: () => {
				map.remove();
				map = null;
			},
		};
	}

	export function addMarker() {
		markerLayers = L.layerGroup();
		for (let location of locations) {
			let m = createMarker(location);
			markerLayers.addLayer(m);
		}

		markerLayers.addTo(map);
	}

	function resizeMap() {
		if (map) {
			map.invalidateSize();
		}
	}

	export function setFocus(lat, lon, zoom) {
		map.setView([lat, lon], zoom);
	}

	export function getScreenshotPromise() {
		return screenShotter.takeScreen("image");
	}
</script>

<svelte:window on:resize={resizeMap} />

<link
	rel="stylesheet"
	href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
	integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
	crossorigin=""
/>
<div class="map" style="height:100%;width:100%" use:mapAction />

<style>
</style>
