function showDiv() {
	document.getElementById('start').style.display = "block";
}

function endDiv() {
	document.getElementById('end').style.display = "block";
	document.getElementById('start').style.display = "none";
}

var number = 45;

var interval;

var answer = 0;

var nope = 0;

var nothing = 0;

function end() {
	for (var i = 1; i < 11; i++) {
		var radios = document.getElementsByName("question" + i);
		for(var j = 0; j < radios.length; j++) {
			var radio = radios[j];
			if (radio.value === "y" && radio.checked) {
				answer++;
			} else if (radio.value === "n" && radio.checked) {
				nope++;
			} 

		}
	}
	$('#right').html("Correct Answers: " + answer);
	$('#wrong').html("Wrong Answers: " + nope)
	$('#na').html("Unanswered: " + nothing)
}

$('#b1').on('click'), start;

function run() {
	interval = setInterval(decrement, 1000);
}

function decrement() {
	number--;

	$('#timer').html('<h2>' + number + '</h2>');

	if (number === 0) {
		stop();
		endDiv();
		end();
	}
}

function start() {
	run(interval);
}

run();

