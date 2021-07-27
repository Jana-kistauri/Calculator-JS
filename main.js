 
let buttons = document.querySelectorAll("input");
let screen = buttons[0];
let clear = buttons[1];
let status = true;

clear.addEventListener("click", function() {
	screen.value = "";
	
	isBtnsDisabled(false);
		
});

for(let i = 2; i < buttons.length; i++) {
	let buttonVal = buttons[i].value;

	buttons[i].addEventListener("click", function(){
		
		if(isNaN(buttonVal) === false) {
			screen.value += buttonVal;

		}else if(buttonVal != "" && buttonVal == "="){

			if(isNaN(screen.value.slice(-1)) === true) {
				screen.style.color="red";

			}else {
				let result = eval(screen.value);
				result = roundNumber(result, 6);

				screen.style.color = "#211722";
				screen.value += buttonVal + result;

				isBtnsDisabled(true);
			}
			
		}else if(buttonVal != "=" && screen.value != ""){
			screen.value += buttonVal;
		};
		
	});
};


function isBtnsDisabled(status){
	for(let i = 2; i < buttons.length; i++) {
		buttons[i].disabled = status;
		if(status) {
			buttons[i].style.opacity = "0.7";
		}else{
			buttons[i].style.opacity = "1";
		}
		
	}
}

function roundNumber(num, dec) {
  return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
}