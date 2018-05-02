// get your own key!
var myAPI = " ";

// grab the input
document.querySelector(".js-go").addEventListener('click',function(){

	var input = document.querySelector("input").value; 
	pushToAPI(input);
});

document.querySelector(".js-userinput").addEventListener('keydown',function(e){

	var input = document.querySelector("input").value; 
	
	// if the key ENTER is pressed...
	if (e.which === 13) {

		pushToAPI(input);
		
	}
});

// do data stuff with API
function pushToAPI(input) {

	var url = "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=" + myAPI;

	// AJAX Request
	var GiphyAJAXCall = new XMLHttpRequest();
	GiphyAJAXCall.open( 'GET', url );
	GiphyAJAXCall.send();

	GiphyAJAXCall.addEventListener('load',function(e){

		var data = e.target.response;
		pushToDOM(data);

	});
}

// show giphs!
function pushToDOM(input) {
	
	var response = JSON.parse(input);

	var imageUrls = response.data;
	var container = document.querySelector(".js-container");

	//clear container
	container.innerHTML = "";

	imageUrls.forEach(function(image){
		
		var src = image.images.fixed_height.url;
		
		container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\"/>";

	});
}


