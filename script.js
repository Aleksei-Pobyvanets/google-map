document.addEventListener("DOMContentLoaded", function (event) {
console.log("DOM fully loaded and parsed");

    var markers = [];
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let labelIndex = 0;

function save() {
  localStorage.setItem('markers', JSON.stringify(markers))
}
save()

    console.log(typeof markers)

    function initialize() {

      for (var i = 0; i < markers.length; i++) {
        console.log(markers[i]);
      }

        var mapOptions = {
            zoom: 18,
            center: new google.maps.LatLng(38.983064, -76.9473872) 
        };
    
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    
        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(38.9827089, -76.9475412),
            map: map,
            label: labels[labelIndex++ % labels.length],
            title: "The Smith Store",
        });
        for (var i = 0; i < markers.length; i++) {
          console.log(mark);
        }
        markers[i].push(marker);
        console.log(marker)
        save()
        
        google.maps.event.addListener(markers[i], 'click', removeMar) 
          
        
        function removeMar() {
          console.log("remove")
          for (var i = 1; i < markers.length; i++)
          markers[i].setMap(null);
          save()
        };

        map.addListener("click", event => {
            alrt()
            addMarker(event.latLng);
        });
        function addMarker(location, value) {
        const marker = new google.maps.Marker({
          position: location,
          title: value,
          label: labels[labelIndex++ % labels.length],
          map: map,
      });
      for (var i = 0; i < markers.length; i++) {
        var mark = markers[i]
        console.log(mark);
      }
      markers[i].push(marker);
      console.log(marker)
      save()
    }
    function alrt(value){
          var value = prompt("Please enter your text");
          if (value == null || value == "") {
          alert("Your have added marker with out text"),alrt();
          } 
      console.log(typeof value)
      console.log(markers)
      }

    }
    google.maps.event.addDomListener(window, 'load', initialize);

})



  