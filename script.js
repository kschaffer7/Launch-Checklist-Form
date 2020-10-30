// Write your JavaScript code here!
window.addEventListener("load", function() {
   let launchForm = document.getElementById("launchForm");
   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");
   let faultyItems = document.getElementById("faultyItems");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let launchStatus = document.getElementById("launchStatus");


   // console.log(launchForm);
   launchForm.addEventListener("submit", function(event) {
      
      // validation to notify user of forgotten field
      if(pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("all fields are required!");
         event.preventDefault();
         return;
      }
      // data type validation for each field
      else if(isNaN(pilotName.value) !== true){
         alert("Invalid input for pilot name.");
         event.preventDefault();
         return;
      }
      else if(isNaN(copilotName.value) !== true){
         alert("Invalid input for co-pilot name."); 
         event.preventDefault();
         return;
      }
      else if(isNaN(fuelLevel.value) === true){
         alert("Invalid input for fuel level.");
         event.preventDefault();
         return;
      }
      else if(isNaN(cargoMass.value) === true){
         alert("Invalid input for cargo mass.");
         event.preventDefault();
         return;
      }
      // Updates launch info based on user input
   
      // Updates pilot and co-pilot names
      pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
      copilotStatus.innerHTML = `Pilot ${copilotName.value} is ready for launch`;
      // If the user submits a fuel level less than 10,000 liters
      if(fuelLevel.value < 10000){
         fuelStatus.innerHTML = `Fuel level too low for launch`;
         launchStatus.innerHTML = `Shuttle not ready for launch`;
         launchStatus.style.color = "red";
      }else{
         fuelStatus.innerHTML = `Fuel level high enough for launch`;
      }

      //If the user submits a cargo mass that is more than 10,000 kilograms
      if(cargoMass.value > 10000){
         cargoStatus.innerHTML = `Cargo level too high for launch`;
         launchStatus.innerHTML = `Shuttle not ready for launch`;
         launchStatus.style.color = "red";
      }else{
         cargoStatus.innerHTML = `Cargo mass low enough for launch`;
      };

      if(fuelLevel.value >= 10000 && cargoMass.value <= 10000){
         launchStatus.style.color = "green";
         launchStatus.innerHTML = `Shuttle is ready for launch`;
      }
      faultyItems.style.visibility = "visible";
      event.preventDefault();
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
