/*
	Description:- This submit.js stores all information of contact page in session storage, clears that page and navigates to submit.html
*/
// Event listener when Document loads
document.addEventListener("DOMContentLoaded", function() {
  
  // get value of submit button by getElementById
  const form = document.getElementById('submit');

  // click event Listener for submit button 
  form.addEventListener("click", function(event) { 

  	
  	// Fetching all values from contact form	
		var fname = document.getElementById('fname').value;
  	var lname = document.getElementById('lname').value;
  	var email = document.getElementById('email').value;
  	var phone = document.getElementById('phone').value;
  	var span = document.getElementById('contact-form').getElementsByTagName('span');

  	function valid() {
  		var isValid = sessionStorage.getItem("isValid");
  			if (isValid == "true") {
  		
	  		// Saved contact details to session storage
	  		contact_details = "Name : "+fname+" "+lname+" Email : "+email+" Phone : "+phone;
	  		sessionStorage.setItem("contact_details",contact_details);

	  		// Clearing all values befor navigating
	  		document.getElementById('fname').value = "";
		  	document.getElementById('lname').value = "";
		  	document.getElementById('email').value = "";
		  	document.getElementById('phone').value = "";

		  	// Navigate to submit.html page
	  		path = window.location.pathname;
	  		path = path.substring(0,path.length-12);
	  		path += "submit.html";
	  		window.location.href = path;
			}	
  	}
  	setTimeout(valid,1000);
  });
});