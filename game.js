var scoreboard = document.getElementById("score").innerHTML;
var lastwordboard = document.getElementById("lastword").innerHTML;
var countdownboard = document.getElementById("timer").innerHTML;
var nextwordboard = document.getElementById("nextword").value;



function checkAnswer() {
	var answer = nextwordboard;
	return false;
}



function checkIfExists() {
	var letter = "a"
	var json = $.getJSON(letter + ".json", function(json) {
		return json[0];
	}
	alert(a);
}