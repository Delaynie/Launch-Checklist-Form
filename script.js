// Write your JavaScript code here!
window.addEventListener("load", function() {
   let formSubmit = document.getElementById("formSubmit");
   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");
   let launchStatus = document.getElementById("launchStatus");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let faultyItems = document.getElementById("faultyItems");
   
   formSubmit.addEventListener("click", (event) => {
// validation for form entries
      if (pilotName.value == "" || copilotName.value == "" || fuelLevel.value == "" || cargoMass.value == "") {
         window.alert("you must provide an answer for each field!");
         event.preventDefault();
      }
      // validation to make sure data type is correct
      if (isNaN(Number(fuelLevel.value)) == true || isNaN(Number(cargoMass.value)) == true) {
        window.alert("you must provide a number for the fuel level and cargo mass.");
        event.preventDefault();
     }
// Shuttle Requirement Updates
   pilotStatus.innerHTML = `${pilotName.value} is ready`;
   copilotStatus.innerHTMl = `${copilotName.value} is ready`;
     if (fuelLevel.value < 10000) {
        //change faultyItems list to visible
        fuelLevel.innerHTML = `There is not enough fuel for the journey`;
        launchStatus.innerHTML = `Shuttle not ready for Launch.`
     }

     event.preventDefault();
   });
})

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
