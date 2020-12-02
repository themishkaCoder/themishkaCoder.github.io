mapboxgl.accessToken = 'pk.eyJ1IjoidGhlbWlzaGthY29kZXIiLCJhIjoiY2s1ejFtbDdtMGFqaTNlbWxtc3Q5YmM1MSJ9.Bql8edpZKdsWtBVa0UC3lg';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [30.438333353916548, 50.502823472878006],
zoom: 16
});




var markerHeight = 50, markerRadius = 10, linearOffset = 25;
var popupOffsets = {
'top': [0, 0],
'top-left': [0,0],
'top-right': [0,0],
'bottom': [0, -markerHeight],
'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
'left': [markerRadius, (markerHeight - markerRadius) * -1],
'right': [-markerRadius, (markerHeight - markerRadius) * -1]
};
var popup = new mapboxgl.Popup({offset: popupOffsets, className: 'my-class'})
.setLngLat([30.438333353916548, 50.502823472878006])
.setHTML("<p class='font-weight-bold mb-3'>04108, м.Київ, вул. Наталії Ужвій,<br> буд. 4А, кім. 46</p>")
.setMaxWidth("300px")

var marker = new mapboxgl.Marker()
.setLngLat([30.438333353916548, 50.502823472878006])
.setPopup(popup)
.addTo(map);

map.addControl(new mapboxgl.NavigationControl());

// 50.502823472878006, 30.438333353916548