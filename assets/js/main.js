var becomeDriver = document.getElementById("boton1");
becomeDriver.addEventListener("click",validate);

function validate(){
	function phoneForm(){
		var input= document.getElementById("phoneBox").value;
		if(input.length==0){
			alert("Submit a phone number")
		}
		else if(isNaN(input)==true){
			alert("Invalid format")
		}
		else{
			alert("Thank you for your application")
		}
	}
	phoneForm();

}
