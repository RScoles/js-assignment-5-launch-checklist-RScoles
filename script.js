// Write your JavaScript code here!

window.addEventListener("load", function() {
    let list = document.getElementById("faultyItems");
    let form = document.querySelector("form");
    
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let pilotText = document.querySelector("input[name=pilotName]");
    let pilotStatus = pilotText.value;
    let copilotText = document.querySelector("input[name=copilotName]");
    let copilotStatus = copilotText.value;let fuelText = document.querySelector("input[name=fuelLevel]");
    let fuelLevelStatus = fuelText.value;
    let cargoText = document.querySelector("input[name=cargoMass]");
    let cargoMassStatus = cargoText.value;
      
     
      formSubmission(document, list, pilotText.value, copilotText.value, fuelText.value, cargoText.value);
});
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});