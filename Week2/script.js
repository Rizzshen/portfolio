const form = document.getElementById("form-input");
console.log("hello world")
form.addEventListener("submit", function(e){
	e.preventDefault();
	const output = document.getElementById("form-output");
	const inputName =  document.getElementById("name");
	const inputMessage = document.getElementById('Message');
	const inputEmail = document.getElementById('email');
	if (inputName.value == ""){
		output.innerText = "Please Enter your Name";

	}
	else if(inputMessage.value == ""){
		output.innerText = "Please Enter your Message"
	}
	else if(inputEmail.value == ""){
		output.innerText = "Please Enter your Email"
	}
	else{
		output.innerText = "form Submitted";
	}
})