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
   let missionTarget = document.getElementById("missionTarget");

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

      // Updates pilot and co-pilot names based on user input
      pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
      copilotStatus.innerHTML = `Pilot ${copilotName.value} is ready for launch`;
      // Launch Status Check updates based on user submitted fuel level
      if(fuelLevel.value < 10000){
         fuelStatus.innerHTML = `Fuel level too low for launch`;
         launchStatus.innerHTML = `Shuttle not ready for launch`;
         launchStatus.style.color = "red";
      }else{
         fuelStatus.innerHTML = `Fuel level high enough for launch`;
      }

      // Launch Status Check updates based on user submitted cargo level
      if(cargoMass.value > 10000){
         cargoStatus.innerHTML = `Cargo level too high for launch`;
         launchStatus.innerHTML = `Shuttle not ready for launch`;
         launchStatus.style.color = "red";
      }else{
         cargoStatus.innerHTML = `Cargo mass low enough for launch`;
      };

      // Launch Status Check updates based on proper fuel and cargo levels
      if(fuelLevel.value >= 10000 && cargoMass.value <= 10000){
         launchStatus.style.color = "green";
         launchStatus.innerHTML = `Shuttle is ready for launch`;
        
      }
      faultyItems.style.visibility = "visible";
      
      event.preventDefault();
   });
   //fetch and display mission destination (Does not rely on submit button)
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         missionTarget.innerHTML += 
            `<h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[0].name}</li>
               <li>Diameter: ${json[0].diameter}</li>
               <li>Star: ${json[0].star}</li>
               <li>Distance from Earth: ${json[0].distance}</li>
               <li>Number of Moons: ${json[0].moons}</li>
            </ol>
            <img src="${json[0].image}">`;
      });
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
