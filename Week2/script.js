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
		output.style.color = "red";
	}
	else if(inputEmail.value == ""){
		output.innerText = "Please Enter your Email"
		output.style.color = "red"
	}
	else{
		output.innerText = "Thank you for your message I will keep in Touch";
		output.sytle.color = "green";
	}
})