function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    
    var displayYearElement = document.querySelector("#displayYear");
    
    if (displayYearElement) {
        displayYearElement.innerHTML = currentYear;
    } else {
        console.error("Element with ID 'displayYear' not found.");
    }
}
/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
