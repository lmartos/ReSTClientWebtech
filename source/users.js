function showAllUsers() {
	$.ajax({ 
		 type: "GET",
		 dataType: "Json",
		 url: "http://localhost:8080/RestServer/api/users/",

		     	success: function(data){      

					$.each(data, function(index, element) {
					
    
							    	$("#userGrid").append('<div class="col-xs-6 col-md-3">'
											         +'<a href="#">'
											          +'<div class="media">'
											             +'<div class="media-left media-middle">'
											               +'<img class="media-object" src="https://pixabay.com/static/uploads/photo/2015/03/04/22/35/head-659651__180.png" alt="useravatar">'
											            +'</div>'
											             +'<div class="media-body">'
											               +'<h4 class="media-heading">'+element.nickname+'</h4>'
											                 +element.firstName + ' ' + element.lastName
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
