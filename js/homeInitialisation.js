//Author(s): Ethan Scott//

function getRandomIntInclusive(min, max) { //function for the random age event//
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//to add a new variable, duplicate each of these functions and change the variable name. to change the default value, just change the number it defaults to below (do not change Age)//

//initialises variables for a new game//
    let Age = 0;
	let Joy = getRandomIntInclusive(25, 75);
	let Health = getRandomIntInclusive(25, 75);
	let Intellect = getRandomIntInclusive(20, 80);
	let Looks = getRandomIntInclusive(20, 80);
	let Money = 0;
	let Karma = 50;
	let rnumber = 0;
	let rfunction = "";
	let revent = "";
	let Logs = "";
    localStorage.setItem("Age", Age);
    localStorage.setItem("Joy", Joy);
    localStorage.setItem("Health", Health);
    localStorage.setItem("Intellect", Intellect);
    localStorage.setItem("Looks", Looks);
    localStorage.setItem("Karma", Karma);
    localStorage.setItem("Money", Money);
	localStorage.setItem("rnumber", rnumber);
	localStorage.setItem("rfunction", rfunction);
	localStorage.setItem("revent", revent);
    localStorage.setItem("Logs", Logs);
	
//hidden variables//
	let Evality = 0; //the degree to which one is evil. different from karma in the sense that Evality is how much Joy you derive from the pain of others, showing a disregard for other people's safety and happiness.//
	localStorage.setItem("Evality", Evality);
	
//obscure variables//
	let redirect = "";
	let orgRelationship = ["Police", 50, "Poison Control", 100, "Neighbourhood", 50, "Celebrities", 0]; //relationship with organisations. has default values. numbers to the right of the organisation name are the relationship with said organisation.//
	let Occupation = []; //different from Job. Not the player's career, but what they are otherwise occupied with, be it prison, vacation, human experimentation, et cetera.//
	let Crimes = [];
	localStorage.setItem("redirect", redirect);
	localStorage.setItem("orgRelationship", orgRelationship);
	localStorage.setItem("Occupation", Occupation);
	
//achievement values//
let Achievements = localStorage.getItem("Achievements");
let AchRead = localStorage.getItem("AchRead");
let Stars = localStorage.getItem("Stars");

if (Achievements === null) { //checks if Achievements exists//
    Achievements = [];
    localStorage.setItem("Achievements", JSON.stringify(Achievements)); //store as JSON//
} else {
    Achievements = JSON.parse(Achievements); //parse back to an array//
}
if (AchRead === null) { //checks if AchRead exists//
    AchRead = [];
    localStorage.setItem("AchRead", JSON.stringify(AchRead));
} else {
    AchRead = JSON.parse(AchRead); //parse back to an array//
}
if (Stars === null) { //checks if Stars exists//
    Stars = 0;
    localStorage.setItem("Stars", Stars);
} else {
    Stars = parseInt(Stars, 10); //parse back to a number//
}
	
//relationship values//
	let Parents = ["Elizabeth Kevins", getRandomIntInclusive(18, 50), "Kevin Kevins", getRandomIntInclusive(18, 70)]; //0 is the mother, 1 is mother's age, 2 is the father, 3 is father's age//
	let Siblings = ["Barbonious Kevins", 2, "Jaquavius Kevins", 4,];
	let Friends = [];
	let Children = [];
	let Grandchildren = [];
	let Spouses = [];
	let Exes = [];
	localStorage.setItem("Parents", Parents);
	localStorage.setItem("Siblings", Siblings);
	localStorage.setItem("Friends", Friends);
	localStorage.setItem("Grandchildren", Grandchildren);
	localStorage.setItem("Spouses", Spouses);
	localStorage.setItem("Exes", Exes);

//career variables//
	let hasJob = false;
	let Job = [];
	let Salary = 0;
	let Degree = [];
	let workExperience = [];
	localStorage.setItem("hasJob", hasJob);
	localStorage.setItem("Job", Job);
	localStorage.setItem("Salary", Salary);
	localStorage.setItem("Degree", Degree);
	localStorage.setItem("workExperience", workExperience);
	console.log("new variables set.")
	console.log("new game successfuly set up.")