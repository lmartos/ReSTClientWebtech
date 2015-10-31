$("#registerNavButton").click(function(){
		window.location.replace("./register.html");
	});
$("#loginNavButton").click(function(){
	login();
});



if(localStorage.getItem("token") != null){
  	console.log("nickname: " + localStorage.getItem("nickname"));
	console.log("token: " + localStorage.getItem("token"));
  	updateNavBar();
  };


function login() {
	var nickname = document.getElementById("nicknameNavBarField").value;
	var password = document.getElementById("passwordNavBarField").value;

	$.ajax({
		type: "POST",
		contentType: "application/json",
		url: "http://localhost:8080/RestServer/api/users/login",
		data: "{\"nickname\": \""+nickname+"\", \"password\": \""+password+"\"}",
		
	}).fail(function(jqXHR,	textStatus, errorThrown) {	
  		console.log("API Request failed: " + errorThrown);	
	}).done(function(data) {  	
		localStorage.setItem("token", data.entity.value);
		localStorage.setItem("nickname", nickname);
		console.log("nickname: " + localStorage.getItem("nickname"));
		console.log("token: " + localStorage.getItem("token"));
		updateNavBar();

   	});
}

function updateNavBar(){
		var navBarRight = document.getElementById("navBarRight");
		$(navBarRight).empty();
		$(navBarRight).append(localStorage.getItem("nickname")+" ");
		$(navBarRight).append("<button type=\"button\" class=\"btn btn-default\" id=\"logoutNavButton\">Logout</button>");
		$("#logoutNavButton").click(function(){
			localStorage.removeItem("token");
			location.reload();

		});

}


