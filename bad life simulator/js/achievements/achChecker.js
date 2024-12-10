//Author(s): Ethan Scott//

if (Joy === 100 && Looks === 100 && Intellect === 100 && Health === 100 && !Achievements.includes(0)) {
	Achievements.push(0);
	console.log("achievement unlocked: 0");
} else if (Achievements.length != 0 && !Achievements.includes(2)) {
    Achievements.push(2);
    console.log("achievement unlocked: 2");
} else if (Money >= 100,000,000 && !Achievements.includes(3)) {
	Achievements.push(3);
	console.log("achievement unlocked: 3");
} else if (Money < 0 && !Achievements.includes(4)) {
	Achievements.push(4);
	console.log("achievement unlocked: 4");
} else if (Achievements.length >= 10 && !Achievements.includes(10)) {
	Achievements.push(10);
	console.log("achievement unlocked: 10");
} else if (Money >= 1,000,000,000 && !Achievements.includes(15)) {
	Achievements.push(15);
	console.log("achievement unlocked: 15");
} else if (Karma === 100 && !Achievements.includes(19)) {
	Achievements.push(19);
	console.log("achievement unlocked: 19");
} else if (Karma === 0 && Evality === 100 && !Achievements.includes(20)) {
	Achievements.push(20);
	console.log("achievement unlocked: 20");
} else if (Karma === 100 && Evality === 100 && !Achievements.includes(21)) {
	Achievements.push(21);
	console.log("achievement unlocked: 21");
} else if (Money <= -100,000 && !Achievements.includes(22)) {
	Achievements.push(22);
	console.log("achievement unlocked: 22");
}

if (Achievements != AchRead) {
	document.getElementById("trophy-unread").style.opacity = "1";
}

localStorage.setItem("Achievements", JSON.stringify(Achievements));