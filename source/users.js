var userData = "";

window.onclick = function(e){
	if($(e.target).data('val') == "return") {
		console.log($(e.target).data('val'));
		$("#userGrid").empty();
		showAllUsers();
	}else{
		console.log($(e.target).data('val'));
		var element = userData[$(e.target).data('val')];
		$("#userGrid").empty();
		$("#userGrid").append('<div class="col-xs-6 col-md-3" id="testing">'
			+ '<a href="#" class="userBadge" data-val="return"></a>'
			+'<div class="media">'
			+'<div class="media-left media-middle">'
			+'<img class="media-object" src="https://pixabay.com/static/uploads/photo/2015/03/04/22/35/head-659651__180.png" alt="useravatar">'
			+'</div>'
			+'<div class="media-body">'
			+'<h4 class="media-heading">'+element.nickname+'</h4>'
			+element.firstName+' '+element.lastName
			+'</div>'
			+'</div>'
			+'</a>'
			+'</div>'
			+'</div>');

}

};

$("#returnToAllUsers").click(function(){
	showAllUsers();
});



function showAllUsers() {
	$.ajax({ 
		 type: "GET",
		 dataType: "Json",
		 url: "http://localhost:8080/RestServer/api/users/",

		     	success: function(data){
		     		userData = data;      

					$.each(data, function(index, element) {
					
    
							    	$("#userGrid").append('<div class="col-xs-6 col-md-3" id="testing">'
							    					 + '<a href="#" class="userBadge" data-val='+index+'></a>'
											          +'<div class="media">'
											             +'<div class="media-left media-middle">'
											               +'<img class="media-object" src="https://pixabay.com/static/uploads/photo/2015/03/04/22/35/head-659651__180.png" alt="useravatar">'
											            +'</div>'
											             +'<div class="media-body">'
											               +'<h4 class="media-heading">'+element.nickname+'</h4>'
											             +'</div>'
											           +'</div>'
											          +'</a>'
											       +'</div>'
											    +'</div>');
							   
						    	
					});

		    	 },	
		    	error: function(errorThrown, textStatus){
				console.log(textStatus);
				}		
	});
		
}

showAllUsers();
