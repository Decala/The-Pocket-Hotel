function get_contact(){
    var via = document.getElementById("contact").value;
    if (via == "Mobile Number"){
        document.getElementById("contact_way").pattern = "[+]+[0-9]{1,3}+[8-9]+[0-9]{7}";
        document.getElementById("contact_way").placeholder = "Please include country code"
    }
    else {
        document.getElementById("contact_way").pattern = "[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$";
        document.getElementById("contact_way").placeholder = "Please enter your email"
    }
}

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
// https://developers.google.com/maps/documentation/javascript/overview