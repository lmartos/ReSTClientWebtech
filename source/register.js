$("#registerButton").click(function(){
	if($(this).val() == "Back"){
		window.history.go(-2);
	}else{
		registerUser();
	}

});


function registerUser(){
	var firstName = document.getElementById("firstName").value;
	var surnamePrefix = document.getElementById("surnamePrefix").value;
	var lastName = document.getElementById("lastName").value;
	var nickname = document.getElementById("nickname").value;
	var password = document.getElementById("password").value;

	console.log("{\"nickname\": \""+nickname+"\", \"firstName\": \""+firstName+"\", \"surnamePrefix\": \""+surnamePrefix+"\", \"lastName\": \""+lastName+"\", \"password\": \""+password+"\"}");	
	
	$.ajax({
			type: "POST",
			contentType: "application/json",
			url: "http://localhost:8080/RestServer/api/users/register",
			data: "{\"nickname\": \""+nickname+"\", \"firstName\": \""+firstName+"\", \"surnamePrefix\": \""+surnamePrefix+"\", \"lastName\": \""+lastName+"\", \"password\": \""+password+"\"}",
		//	"nickname="+nickname+"&firstName="+firstName+"&surnamePrefix="+surnamePrefix+"&lastName="+lastName+"&password="+password,
		
	}).fail(function(jqXHR,	textStatus, errorThrown ) {	
 		console.log(""+errorThrown);

 		if(errorThrown == "Expectation Failed"){
	 		$('#registrationMessage').empty();
			$('#registrationMessage').append("Vul alstublieft alle velden in.)");
		}else{
	 		$('#registrationMessage').empty();
			$('#registrationMessage').append("Helaas, het was onmogenlijk om een nieuwe gebruiker aan te maken");
		}
	}).done(function(data) {  	
		$('#registrationMessage').empty();

		$('#registrationMessage').append("Gefeliciteerd, u bent successvol geregistreerd.");
		$('.formInput').empty();
		$('#registerButton').html("Back");
		$('#registerButton').val("Back");
   	});
}

