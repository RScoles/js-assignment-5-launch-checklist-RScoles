// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTarget = document.getElementById("missionTarget")
   missionTarget.innerHTML = `<h2>Mission Destination</h2>
   <ol>
       <li>Name: ${name}</li>
       <li>Diameter: ${diameter}</li>
       <li>Star: ${star}</li>
       <li>Distance from Earth: ${distance}</li>
       <li>Number of Moons: ${moons}</li>
   </ol>
   <img src="${imageUrl}">
   `;
   
   
                
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
        h2.style.color = "rgb(199, 37, 78)";
        h2.innerHTML = "Shuttle Not Ready for Launch";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML ="Fuel level too low for launch";
        cargoStatus.innerHTML="Cargo mass too heavy for launch";
    } else if (cargoLevel <= 10000 && fuelLevel < 10000) {
        list.style.visibility ="visible";
        h2.style.color = "rgb(199, 37, 78)";
        h2.innerHTML = "Shuttle Not Ready for Launch";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML ="Fuel level too low for launch";
        cargoStatus.innerHTML="Cargo mass low enough for launch";
    } else if (cargoLevel > 10000 && fuelLevel >= 10000) {
        list.style.visibility ="visible";
        h2.style.color = "rgb(199, 37, 78)";
        h2.innerHTML = "Shuttle Not Ready for Launch";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML ="Fuel level high enough for launch";
        cargoStatus.innerHTML="Cargo mass too heavy for launch";
    } else if (cargoLevel <= 10000 && fuelLevel >= 10000) {
        list.style.visibility ="visible";
        h2.style.color = "rgb(65, 159, 106)";
        h2.innerHTML = "Shuttle is Ready for Launch";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML ="Fuel level high enough for launch";
        cargoStatus.innerHTML="Cargo mass low enough for launch";
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        console.log(response)     
        return response.json();
    });
    console.log(planetsReturned);
    return planetsReturned;
}

function pickPlanet(planets) {
    const index = Math.floor(Math.random() * planets.length);
    return planets[index];
  }


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
