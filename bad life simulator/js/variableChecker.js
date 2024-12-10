//Author(s): Ethan Scott//

//retrieve values from local storage, or use default values if not found//
let Age = parseInt(localStorage.getItem("Age")) || 0; //sets variable to the respective value found from local storage. parseInt ensures it is treated as a number and not a string so it can be used in mathematical operations, e.g. Age += 50//
let Joy = parseInt(localStorage.getItem("Joy")) || 50;
let Health = parseInt(localStorage.getItem("Health")) || 50;
let Intellect = parseInt(localStorage.getItem("Intellect")) || 50;
let Looks = parseInt(localStorage.getItem("Looks")) || 50;
let Karma = parseInt(localStorage.getItem("Karma")) || 50;
let Money = parseInt(localStorage.getItem("Money")) || 0;
let rnumber = parseInt(localStorage.getItem("rnumber")) || 0;
let rfunction = localStorage.getItem("rfunction") || ""; //strings don't use parseInt because they are a string, not an int//
let revent = localStorage.getItem("revent") || "";
let Logs = localStorage.getItem("Logs") || "";

//obscure values//
let orgRelationship = parseInt(localStorage.getItem("orgRelationship")) || ["Police", 50, "Poison Control", 100, "Neighbourhood", 50, "Celebrities", 0];
let Evality = 0;

//achievement values//
let Achievements = JSON.parse(localStorage.getItem("Achievements")) || [];
let AchRead = JSON.parse(localStorage.getItem("AchRead")) || [];
let Stars = JSON.parse(localStorage.getItem("Stars")) || 0;

//relationship values//
let Parents = localStorage.getItem("Parents") || ["Elizabeth Kevins", getRandomIntInclusive(18, 50), "Kevin Kevins", getRandomIntInclusive(18, 70)];
let Siblings = localStorage.getItem("Siblings") || ["Barbonious Kevins", 2, "Jaquavius Kevins", 4,];
let Friends = localStorage.getItem("Friends") || [];
let Children = localStorage.getItem("Children") || [];
let Grandchildren = localStorage.getItem("Grandchildren") || [];
let Spouses = localStorage.getItem("Spouses") || [];
let Exes = localStorage.getItem("Exes") || [];

//career values//
let Salary = parseInt(localStorage.getItem("Salary")) || 0;
let hasJob = Boolean(!localStorage.getItem("hasJob") || false);
let Job = localStorage.getItem("Job") || [];
let Degree = localStorage.getItem("Degree") || [];
let workExperience = localStorage.getItem("workExperience") || [];

console.log("retreived all values.")

//sets values to their max if they are over their max, and min if they are under their min//
if (Joy > 100) {
	Joy = 100;
} else if (Joy < 0) {
	Joy = 0;
}

if (Health > 100) {
	Health = 100;
} else if (Health < 0) {
	Health = 0;
}

if (Intellect > 100) {
	Intellect = 100;
} else if (Intellect < 0) {
	Intellect = 0;
}

if (Looks > 100) {
	Looks = 100;
} else if (Looks < 0) {
	Looks = 0;
}

if (Karma > 100) {
	Karma = 100;
} else if (Karma < 1) { //karma can't be 0 so as to not make anything impossible due to your karma level//
	Karma = 1;
}

if (Evality > 100) {
	Evality = 100;
} else if (Evality < 0) {
	Evality = 0;
}