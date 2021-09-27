//ready function
$(document).ready(function () {
	$("#fname").focus();
	$("#submit").click( function(event) {
			var isValid = true; //variable to check that data is valid or not
			sessionStorage.setItem("isValid",isValid);
			console.log(sessionStorage.getItem("isValid"))
			// validate the First Name entry
			var fname = $("#fname").val().trim();
			if (fname == "") {
				$("#fname").next().text("This field is required");
				isValid = false;
			} else {
				$("#fname").next().text("");
			}
			$("#fname").val(fname);

			// validate the Last Name entry
			var lname = $("#lname").val().trim();
			if (lname == "") {
				$("#lname").next().text("This field is required");
				isValid = false;
			} else {
				$("#lname").next().text("");
			}
			$("#lname").val(lname);

			// Validate the email entry with a regular expression
			var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
			var email = $("#email").val().trim();
			if (email == "") { 
				$("#email").next().text("This field is required");
				isValid = false;
			} else if ( !emailPattern.test(email) ) {
				$("#email").next().text("Must be a valid email address");
				isValid = false;
			} else {
				$("#email").next().text("");
			}
			$("#email").val(email);

			// Validate the phone number with a regular expression
			var phonePattern = /^\d{3}-\d{3}-\d{4}$/;
			var phone = $("#phone").val().trim();
			if (phone == "") { 
				$("#phone").next().text("This field is required");
				isValid = false; 
			} else if ( !phonePattern.test(phone) ) {
				$("#phone").next().text("Use 999-999-9999 format");
				isValid = false;
			} else {
				$("#phone").next().text("");
			}
			$("#phone").val(phone);

			// Prevent the submission of the form if any entries are invalid 
			if (isValid == false) {
				event.preventDefault();	
				sessionStorage.setItem("isValid",isValid);
			}
			else {
				sessionStorage.setItem("isValid",isValid);
			}
			$("#fname").focus(); // Shifting focus to first input field of First name
		} //end function
	); //end submit

	// click event for review
	$("#review").click(function () {
		
		if ($("#add-experience").hasClass("display")) {
			$("#add-experience").removeClass('display').addClass('add-experience');
			$("#review").html("- Add review");
		} else {
			$("#add-experience").removeClass('add-experience').addClass('display');
			$("#review").html("+ Add review");
		}
	}); //ending click button

	//click event for add button
	$("#add").click(function () {
		var name = $("#name").val().trim();
		var gender = $("#gender").val().trim();
		var travel_destination = $("#travel_destination").val().trim();
		var add_review = $("#add-review").val().trim();
		if (name == "" || add_review == "") {
			alert("All fields are required");
		}
		else {
			var h2 = document.createElement("h2");
			var h2_text = document.createTextNode("Name : "+name);
			h2.appendChild(h2_text);
			var h3 = document.createElement("h3");
			var h3_text = document.createTextNode("Travelled to : "+travel_destination);
			h3.appendChild(h3_text);
			var br = document.createElement("br");
			var p = document.createElement("p");
			var p_text = document.createTextNode(add_review);
			p.appendChild(p_text);

			var div_flexbox_item= document.createElement("div");
			div_flexbox_item.setAttribute("class","flexbox-item");

			var image = document.createElement("img");
			var img_path; 
			if(gender == "Male") {
				img_path = "images/male.jpg";
			} else {
				img_path = "images/female.png";
			}
			image.setAttribute("src",img_path);
			var div_customer_experience = document.createElement("div");
			div_customer_experience.setAttribute("class","customer-experience flexbox-container");
			div_flexbox_item.append(h2);
			div_flexbox_item.append(h3);
			div_flexbox_item.append(br);
			div_flexbox_item.append(p);
			div_customer_experience.append(div_flexbox_item);
			div_customer_experience.append(image);

			$(".Hello").append(div_customer_experience);

			$("#name").val("");
			$("#add-review").val("");
			$('#gender option').prop('selected', function () {
                return this.defaultSelected;
            });
            $('#travel_destination option').prop('selected', function () {
                return this.defaultSelected;
            });

		}
		
	});
}); //end ready function