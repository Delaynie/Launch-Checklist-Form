// Write your JavaScript code here!
window.addEventListener("load", function() {
   let formSubmit = document.getElementById("formSubmit");
   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");
   let faultyItems = document.getElementById("faultyItems");
   let launchStatus = document.getElementById("launchStatus");
   
   formSubmit.addEventListener("click", (event) => {

      if (pilotName.value == "" || copilotName.value == "") {
         window.alert("you must provide an answer for each field!");
         event.preventDefault();
      }
      if (isNaN(Number(fuelLevel.value)) == true || isNaN(Number(cargoMass.value)) == true) {
        window.alert("you must provide correct data.");
        event.preventDefault();
     }

   });
})

/*

id="pilotStatus"
id="copilotStatus"
id="fuelStatus"
id="cargoStatus"

   let li = document.getElementById("pilotStatus");
   li.addEventListener("submit", function(){
      document.getElementById("pilotStatus").innerHTML = `${pilotName.getAttribute("pilotName")} is ready`;
   })

   let copolitName = this.document.getElementById("copilotName");
   copolitName.addEventListener("submit", function(){
      copolitStatus.innerHTML = `Copilot ${copilotName} boomReady!`;
})*/


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
