// Write your JavaScript code here!
window.addEventListener("load", function() {
   let launchForm = document.getElementById("launchForm");
   // console.log(launchForm);
   launchForm.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      // validation to notify user of forgotten field
      if(pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("all fields are required!");
         event.preventDefault();
      }
      if(isNaN(pilotName.value) !== true){
         alert("Invalid input for pilot name.");
         event.preventDefault();
      }
      if(isNaN(copilotName.value) !== true){
         alert("Invalid input for co-pilot name.");
         event.preventDefault();
      }
      if(isNaN(fuelLevel.value) === true){
         alert("Invalid input for fuel level.");
         event.preventDefault();
      }
      if(isNaN(cargoMass.value) === true){
         alert("Invalid input for cargo mass.");
         event.preventDefault();
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
