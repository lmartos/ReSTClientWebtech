$("#registerButton").click(function(){
	$('#registrationForm').submit(function(){
		var values = $(this).serialize();
		registerUser(values);

	});
});


function registerUser(values){
	
	console.log(values);
	
	$.ajax({
			type: "POST",
			dataType: "json",
			url: "http://localhost:8080/RestServer/api/users/register",
			data: values,
			//data: "nickname="+values[0]+"&firstName="+values[1]+"&surnamePrefix="+values[2]+"&lastName="+values[3]+"&password="+values[4],
		
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
		$('##registrationMessage').append("Gefeliciteerd, u bent successvol geregistreerd.");
   	});
}