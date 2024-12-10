//Author(s): Ethan Scott//

function getRandomIntInclusive(min, max) { //function for the random age event//
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("plus").addEventListener("click", function() {
	Age ++;
	localStorage.setItem("Age", Age);
	for (let i = 1; i < Parents.length; i += 2) {Parents[i]++;} //ages up all of your relationships//
	for (let i = 1; i < Siblings.length; i += 2) {Sliblings[i]++;}
	for (let i = 1; i < Friends.length; i += 2) {Friends[i]++;}
	for (let i = 1; i < Children.length; i += 2) {Children[i]++;}
	for (let i = 1; i < Grandchildren.length; i += 2) {Grandchildren[i]++;}
	for (let i = 1; i < Spouses.length; i += 2) {Spouses[i]++;}
	for (let i = 1; i < Exes.length; i += 2) {Exes[i]++;}
	localStorage.setItem("Parents", Parents);
	localStorage.setItem("Siblings", Siblings);
	localStorage.setItem("Friends", Friends);
	localStorage.setItem("Children", Children);
	localStorage.setItem("Grandchildren", Grandchildren);
	localStorage.setItem("Spouses", Spouses);
	localStorage.setItem("Exes", Exes);
	//
	
	//
	if (Age === 18) { //high school graduation//
		Degree.push("highSchool");
		localStorage.setItem("Degree", Degree);
	}
	if (Intellect <= 20) { //if player is... dumb//
		Money += (Salary / 100) * 30; //adds 30% of salary to money//
	} else if (Intellect >= 80) { //if player is a genius//
		Money += (Salary / 100) * 40; //adds 40% of salary to money; you get paid more, you have a better job, you're smart//
	}
	localStorage.setItem("Money", Money);
	if (Evality >= 85) { //if player is evil//
		Karma / 2;
		Joy += 5;
	} else if (Evality <= 10 && Age >= 12) { //if player is a saint (it's easier to be a saint in your formative ages so you don't get benifits for that)//
		Karma * 1.2;
		Joy += 10;
	}
	if (Health <= 20) { //if player is unhealthy//
		Joy -= 10;
	} else if (Health >= 85) { //if player is really healthy//
		Joy += 10;
	}
	if (Joy <= 15) { //being unhappy sacrafices other stats//
		Health -= 5;
		Intellect -= 5;
		Looks -= 10;
	} else if (Joy >= 80) { //being happy gives more motivation and confidence//
		Health += 8;
		Intellect += 5;
		Looks += 8;
	}
	if (Looks <= 20) { //if player is ugly//
		Joy -= 5;
	} else if (Looks >= 85) { //if player is attractive//
		Joy += 8;
	}
	if (Money >= 1,000,000) { //if player has more than $1,000,000 in the bank//
		Joy += 5;
	} else if (Money >= 100,000,000) { //if player is RICH (has more than $100,000,000 in the bank//
		Joy += 8;
		Karma -= 4;
	} else if (Money <= 0) { //on the inverse, if player is in debt//
		Joy -= 5;
	} else if (Money <= -200,000) { //if player is in generational debt//
		Joy -= 15;
		Karma += 2;
	}
	localStorage.setItem("Karma", Karma)
	localStorage.setItem("Joy", Joy)
	//
	
	//
	if (Age >= 75 && Age <= 79) {
			rnumber = getRandomIntInclusive(1, 5); //gets a random number between x and y//
			if (rnumber === 1) {
				Occupation.push("Death"); //player has now died//
				console.log("player died");
				rnumber = 0;
			} else if (rnumber != 1) {
				console.log(rnumber);
				console.log("player did not die");
				rnumber = 0;
		}
	} else if (Age === 80) {
		if (!Achievements.includes(11)) {
			Achievements.push(11)}
		Occupation.push("Death"); //player has now died//
		console.log("player died");
	}
	//
	
	//
	rnumber = getRandomIntInclusive(1, 2); //gets a random number between x and y//
	console.log("rnumber === " + rnumber);
	if (rnumber === 1) { //one in two (50%) chance of getting an event)//
			localStorage.setItem("rfunction", rfunction);
			window.location.reload(); //reloads the page//
	} else if (rnumber === 2) { //gives event//
		if (Age >= 2 && Age <= 6) { //toddlerhood//
			revent = "toddlerhood";
			localStorage.setItem("revent", revent);
				rnumber = getRandomIntInclusive(1, 3); //gets a random number between x and y//
				localStorage.setItem("rnumber", rnumber);
				if (rnumber === 1) {
					window.location.href = "./event-3.html";
				} else if (rnumber === 2) {
					window.location.href = "./event-3.html";
				} else if (rnumber === 3) {
					window.location.href = "./event-3.html";
				}
		}
		if (Age >= 7 && Age <= 12) { //childhood//
			revent = "childhood";
			localStorage.setItem("revent", revent);
				rnumber = getRandomIntInclusive(1, 1); //gets a random number between x and y//
					localStorage.setItem("rnumber", rnumber);
					if (rnumber === 1) {
						window.location.href = "./event-3.html";
					}
		} else if (Age >= 13 && Age >= 17) { //teenagehood//
			revent = "teenagehood";
			localStorage.setItem("revent", revent);
			rnumber = getRandomIntInclusive(1, 1); //gets a random number between x and y//
			localStorage.setItem("rnumber", rnumber);
					if (rnumber === 1) {
						window.location.href = "./event-3.html";
					}
		} else if (Age >= 18 && Age >= 60) { //adulthood//
			revent = "adulthood";
			localStorage.setItem("revent", revent);
			rnumber = getRandomIntInclusive(1, 1); //gets a random number between x and y//
			localStorage.setItem("rnumber", rnumber);
					if (rnumber === 1) {
						window.location.href = "./event-3.html";
					}
		} else if (Age >= 61) { //elderlyhood//
			revent = "elderlyhood";
			localStorage.setItem("revent", revent);
			rnumber = getRandomIntInclusive(1, 1); //gets a random number between x and y//
			localStorage.setItem("rnumber", rnumber);
					if (rnumber === 1) {
						window.location.href = "./event-3.html";
					}
		}
	}
});