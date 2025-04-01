let PressedButtons = {button1: false, button2: false, button3: false};
var audio = new Audio('sounds/call.mp3');
function Check()
{
	if (PressedButtons.button1 && PressedButtons.button2 && PressedButtons.button3)
	{
		window.location.href = "Organisation.html";
	}
}

document.getElementById("9").addEventListener("click", function() {
	PressedButtons.button1 = true;
	Check();
});
document.getElementById("4").addEventListener("click", function() {
	PressedButtons.button2 = true;
	Check();
});
document.getElementById("1").addEventListener("click", function() {
	PressedButtons.button3 = true;
	Check();
});
