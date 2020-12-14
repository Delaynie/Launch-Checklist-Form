// Write your JavaScript code here!
window.addEventListener("load", function() {
   let formSubmit = document.getElementById("formSubmit");
   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");

   formSubmit.addEventListener("click", (event) => {
      if (pilotName.value == "") {
         window.alert("you must enter your pilot's name");
         event.preventDefault();
      }
      if (copilotName.value == "") {
         window.alert("you need to enter your copilot's name!");
         event.preventDefault();
      }
      if (fuelLevel.value == "") {
         window.alert("you need a valid fuel level");
         event.preventDefault()
      }
      if (cargoMass.value == "") {
         window.alert("you need a valid cargo mass");
         event.preventDefault();
      }
   });
})

/*

   let faultyItems = document.getElementById("faultyItems");
   let launchStatus = document.getElementById("launchStatus");

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
