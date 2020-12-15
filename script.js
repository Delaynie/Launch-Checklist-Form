// Write your JavaScript code here!
window.addEventListener("load", function() {
   // fetch planetary JSON
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
              response.json().then( function(json) {
                let div = document.getElementById('missionTarget');
                div.innerHTML =
                `<h2>Mission Destination</h2>
                <ol>
                   <li>Name: ${json[3].name}</li>
                   <li>Diameter: ${json[3].diameter}</li>
                   <li>Star: ${json[3].star}</li>
                   <li>Distance from Earth: ${json[3].distance}</li>
                   <li>Number of Moons: ${json[3].moons}</li>
                </ol>
                <img src="${json[3].image}">
              `});
          });

   let form = document.querySelector("form");
   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");
   let launchStatus = document.getElementById("launchStatus");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let faultyItems = document.getElementById("faultyItems");
   
   form.addEventListener("submit", function(event) {
      event.preventDefault();
// validation for form entries
      if (pilotName.value == "" || copilotName.value == "" || fuelLevel.value == "" || cargoMass.value == "") {
         alert("You must provide an answer for each field!");
      }// validation to make sure data type is correct
      else if (isNaN(Number(fuelLevel.value)) == true || isNaN(Number(cargoMass.value)) == true || isNaN(Number(pilotName.value)) == false || isNaN(Number(copilotName.value)) == false) {
         alert("Enter correct data in each field.");
     } else {
// Shuttle Requirement Updates
   pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
   copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;
     if (fuelLevel.value < 10000) {
         document.getElementById("fuelStatus").innerHTML = `There is not enough fuel for the journey`;
         launchStatus.innerHTML = `Shuttle Not Ready For Launch.`
         launchStatus.style.color = "red";
         faultyItems.style.visibility = "visible";
     }
     if (cargoMass.value > 10000) {
         document.getElementById("cargoStatus").innerHTML = `There is too much cargo to launch.`;
         launchStatus.innerHTML = `Shuttle Not Ready For Launch.`;
         launchStatus.style.color = "red";
         faultyItems.style.visibility = "visible";
     }
     // if all is well...
     if (fuelLevel.value >= 10000 && cargoMass.value < 9999) {
        launchStatus.innerHTML = `Shuttle Ready For Launch.`;
        launchStatus.style.color = "green";
     }
   }
   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/