//Author(s): Ethan Scott//



AchRead = "Achievements";
localStorage.setItem("AchRead", JSON.stringify(AchRead));

document.getElementById("stars").innerHTML = Stars+" Stars";
document.getElementById("achsAchieved").innerHTML = Achievements.length+" / 34";