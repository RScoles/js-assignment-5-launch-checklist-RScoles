// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   missiontarget = document.getElementById("missionTarget");
   missiontarget.innerHTML = 
            `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">
                    `

}


function validateInput(testInput) {
    if (testInput === ""){
        return "Empty";
    }else if(isNaN(testInput)) {
        return "Not a Number"
    }else if(!isNaN(testInput)) {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let h2 = document.getElementById("launchStatus");
    if (validateInput(pilot)=== "Empty" || validateInput(copilot)==="Empty" || validateInput(fuelLevel)==="Empty" || validateInput(cargoLevel)==="Empty") {
        alert("Please fill the all the form");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert("Please enter only letters in Name Boxes")
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
    alert("Please enter only numbers in Fuel and Cargo Boxes")
    }
    if (cargoLevel > 10000 && fuelLevel < 10000) {
        list.style.visibility ="visible";
        h2.style.color = "red";
        h2.innerHTML = "Shuttle not ready for launch";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML ="Fuel Level too low for launch";
        cargoStatus.innerHTML="Cargo mass too heavy for launch";
    } else if (cargoLevel <= 10000 && fuelLevel < 10000) {
        list.style.visibility ="visible";
        h2.style.color = "red";
        h2.innerHTML = "Shuttle not ready for launch";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML ="Fuel Level too low for launch";
        cargoStatus.innerHTML="Cargo mass low enough for launch";
    } else if (cargoLevel > 10000 && fuelLevel >= 10000) {
        list.style.visibility ="visible";
        h2.style.color = "red";
        h2.innerHTML = "Shuttle not ready for launch";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML ="Fuel Level high enough for launch";
        cargoStatus.innerHTML="Cargo mass too heavy for launch";
    } else if (cargoLevel <= 10000 && fuelLevel >= 10000) {
        list.style.visibility ="visible";
        h2.style.color = "green";
        h2.innerHTML = "Shuttle  ready for launch";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML ="Fuel Level is high enough for launch";
        cargoStatus.innerHTML="Cargo mass low enough for launch";
    }
}

async function myFetch() {
    let planetsReturned;
  
    planetsReturned = await fetch(
      "https://handlers.education.launchcode.org/static/planets.json"
    );
    planetsReturned = await planetsReturned.json();
    return planetsReturned;
  }
  
  function pickPlanet(planets) {
    return Math.floor(Math.random() * planets.length);
  }


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
