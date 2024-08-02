let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  var location = { lat: 1.2846, lng: 103.8528 };

  map = new Map(document.getElementById("map"), {
    center: location,
    zoom: 20,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: location,
    title: "The Pocket Hotel"
  });
}
//Source:
//https://developers.google.com/maps/documentation/javascript/overview

//By Declan Chua, 240598B