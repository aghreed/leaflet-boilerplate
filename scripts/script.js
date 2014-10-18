$(document).ready(function () {

	var map = L.map('map').setView([40.731714, -96.703930], 13);

	var accessToken = '?access_token=pk.eyJ1IjoiYnNyaW5pZGhpIiwiYSI6ImNuQVc0XzgifQ.ZT6f8SZw2GvijiJGThXFWg';
	var mapId = 'bsrinidhi.k05p4d78';

	var tileLayer = L.tileLayer('http://{s}.tiles.mapbox.com/v3/' + mapId + '/{z}/{x}/{y}.png', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
		maxZoom: 18
	}).addTo(map);

	var layerUrl = 'http://bhushit.cartodb.com/api/v2/viz/321a1e22-5704-11e4-bed3-0e4fddd5de28/viz.json';

	var carto = cartodb.createLayer(map, layerUrl).addTo(map);

	L.control.layers(tileLayer, carto).addTo(map);
});