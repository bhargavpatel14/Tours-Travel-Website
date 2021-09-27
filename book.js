/*
    Description :- This book.js file has logic to validate all input fields in book page and create new DOM elements and 
                    nodes to HTML page and counts some important information and display it.
*/
// JQuery datepicker Plugin  
$(function() {
    // Current Time object
    var currentTime = new Date();
    // Starting Date  
    var startDateFrom = new Date(currentTime.getFullYear(),currentTime.getMonth(),currentTime.getDate());
    // Last Date object
    var startDateTo = new Date(currentTime.getFullYear(),currentTime.getMonth() +12,0);

    // Uses datepicker plugin for datepicker id
    $("#datepicker").datepicker({
        dateFormat: 'dd/mm/yy',
        minDate: startDateFrom,
        maxDate: startDateTo,
        changeMonth: true,
        changeYear: true
    });
});

// Function to return current Date
var cur_time = function() {
    //creates date object and return string of current date
    var currentTime = new Date();
    return currentTime.getHours()+":"+currentTime.getMinutes()+":"+currentTime.getSeconds();
};

// Function to return current Time
var cur_date = function() {
    //creates date object and return string of current time
    var currentTime = new Date();
    return currentTime.getDate()+"/"+(currentTime.getMonth()+1)+"/"+currentTime.getFullYear();
};

var i; //temporary variable to use in for loops

// Function to return price as per selected destination by user
var price  = function(destination) {
    //Arrays for destinations and its tour price
    const cities = ["Saputara","Mumbai", "Jaisalmer","Ladakh","Manali","Sydney","Egypt","Hawai","Paris","Malaysia","Dubai"];
    const price = [1799,6599,3599,10599,7599,79791,124360,113000,101690,33740,43999];

    // Checking which item matches destination and gives corresponding value
    for(i = 0;i < cities.length; i++) {
        if (cities[i] == destination) {
            return price[i];
        }
    }
};

// Function to return arrival date as per selected destination by user
var arrival_date = function(destination) {
    //Arrays for destinations and its tour span days
    const cities = ["Saputara","Mumbai", "Jaisalmer","Ladakh","Manali","Sydney","Egypt","Hawai","Paris","Malaysia","Dubai"];
    const days = [3,5,4,10,8,7,6,8,7,5,6];

    // Checking which item matches destination and gives corresponding value
    for(i = 0;i < cities.length; i++) {
        if (cities[i] == destination) {
            var date2 = $("#datepicker").datepicker('getDate','+1d');
            date2.setDate(date2.getDate()+ days[i]); 
            return date2.getDate()+"/"+ (date2.getMonth()+1)+"/"+ date2.getFullYear(); //returns arrival date
        } 
    }
};

// Function to number of days of trip as per selected destination by user
var days_count = function(destination) {
    //Arrays for destinations and its tour span days
    const cities = ["Saputara","Mumbai", "Jaisalmer","Ladakh","Manali","Sydney","Egypt","Hawai","Paris","Malaysia","Dubai"];
    const days = [3,5,4,10,8,7,6,8,7,5,6];

    // Checking which item matches destination and gives corresponding value
    for(i = 0;i < cities.length; i++) {
        if (cities[i] == destination) {
            return days[i]; //returns no of days
        }
    }
};

// Function to return image path as per selected destination by user
var image_path = function(destination) {
    //Arrays for destinations and its image paths
    const cities = ["Saputara","Mumbai", "Jaisalmer","Ladakh","Manali","Sydney","Egypt","Hawai","Paris","Malaysia","Dubai"];
    const images_path = ["images/Saputara.jpg","images/p-1.jpg","images/p-8.jpg","images/p-9.jpg","images/p-7.jpg","images/sydney.jpg","images/p-6.jpg"
    ,"images/p-2.jpg","images/p-4.jpg","images/Malaysia.jpg","images/Dubaii.jpg"]

    // Checking which item matches destination and gives corresponding value
    for(i = 0;i < cities.length; i++) {
        if (cities[i] == destination) {
            return images_path[i]; //return image path
        }
    }
};

// Function to add new elements to DOM 
var add_details = function(event) {
    // Getting values which user have entered
    var name = $("#name").val();
    var travellers = $("#travellers").val();
    var date = $("#datepicker").val();
    var destination = $("#destination").val();

    // Calling methods for current date and time
    var current_time = cur_time();
    var current_date = cur_date(); 

    // Checking data is empty or not that user have entered
    if (name == "" || travellers == "" || date == "" || destination == ""){
        alert("You have not entered sufficient information!!");
        return false; //return false to prevent default actions
    } else {

        //calling methods to count and fetch some information
        var amount = price(destination);
        var arrival = arrival_date(destination);
        var days = days_count(destination);
        var path = image_path(destination);

        // Create variable to store div with details id
        var div_all = $("#details");

        // Create new h4 tag and its text for Name
        const h4_name = document.createElement("h4");
        const h4_name_text = document.createTextNode("Name : " + name.charAt(0).toUpperCase() + name.slice(1));
        h4_name.appendChild(h4_name_text);

        // Create new h4 tag and its text for Registration date
        const h4_registration_date = document.createElement("h4");
        const h4_registration_date_text = document.createTextNode("Registration Date : " + current_date);
        h4_registration_date.appendChild(h4_registration_date_text);

        // Create new h4 tag and its text for Registration Time
        const h4_registration_time = document.createElement("h4");
        const h4_registration_time_text = document.createTextNode("Registration Time : " + current_time);
        h4_registration_time.appendChild(h4_registration_time_text);
        
        // Create new h4 tag and its text for Number of Travellers
        const h4_travellers = document.createElement("h4");
        const h4_travellers_text = document.createTextNode("Number of Travellers : " + travellers);
        h4_travellers.appendChild(h4_travellers_text);
        
        // Create new h4 tag and its text for Leaving date
        const h4_date = document.createElement("h4");
        const h4_date_text = document.createTextNode("Leaving Date : " + date);
        h4_date.appendChild(h4_date_text);

        // Create new h4 tag and its text for Arrival Date
        const h4_arrival_date = document.createElement("h4");
        const h4_arrival_date_text = document.createTextNode("Arrival Date : " + arrival);
        h4_arrival_date.appendChild(h4_arrival_date_text);
        
        // Create new h4 tag and its text for Destination name
        const h4_destination = document.createElement("h4");
        const h4_destination_text = document.createTextNode("Destination : " + destination);
        h4_destination.appendChild(h4_destination_text);

        // Create new h4 tag and its text for Number of days of trip
        const h4_days = document.createElement("h4");
        const h4_days_text = document.createTextNode("Number of Days : " + days);
        h4_days.appendChild(h4_days_text);

        // Create new h4 tag and its text for Price per person
        const h4_price = document.createElement("h4");
        const h4_price_text = document.createTextNode("Price (Per Person): INR " + amount +"/-");
        h4_price.appendChild(h4_price_text);

        // Create new h4 tag and its text for Total amount
        const h4_total_price = document.createElement("h4");
        const h4_total_price_text = document.createTextNode("Total Amount : INR " + (travellers*amount) +"/-" );
        h4_total_price.appendChild(h4_total_price_text);
        
        // Create new h2 tag and its text Title
        const heading = document.createElement("h2");
        const heading_text = document.createTextNode("Thank you for Registration!! Enjoy your Trip");
        heading.append(heading_text);

        // Create new h3 tag and its text for Sub heading
        const sub_heading = document.createElement("h3");
        const sub_heading_text = document.createTextNode("Registration Details : ");
        sub_heading.append(sub_heading_text);

        // Create new div tag to store all information
        const div = document.createElement("div");

        // Append all information in div
        div.append(sub_heading);
        div.append(h4_name);
        div.append(h4_registration_date);
        div.append(h4_registration_time);
        div.append(h4_destination);
        div.append(h4_days);
        div.append(h4_date);
        div.append(h4_arrival_date);
        div.append(h4_travellers);
        div.append(h4_price);
        div.append(h4_total_price);

        // Creating table elements to make grid 
        const table = document.createElement("table");
        const tr = document.createElement("tr");
        const td_1 = document.createElement("td");

        //appending div to first td element
        td_1.append(div);

        const td_2 = document.createElement("td");
        const img = document.createElement("img");
        // Setting src attribut to image path
        img.setAttribute("src",path);

        // Creating figcaption tag for destination name below image
        const figcaption = document.createElement("figcaption");
        const figcaption_text = document.createTextNode(destination);

        // appending all elements step by step to table
        figcaption.append(figcaption_text);
        td_2.append(img);
        td_2.append(figcaption);
        tr.append(td_1);
        tr.append(td_2);
        table.append(tr);
        
        // appending Title and table to our main div
        div_all.append(heading);
        div_all.append(table);
        return true; 
    }   
};

// Document ready function
$(document).ready(function () {
    
    $("#name").focus(); // Shifting focus on first textbox when page loads

    // Click event for Book now button
    $("#book-now").click(function (event) {
        // Checking that add_details returns true or false
        if(add_details()) {

            event.preventDefault();  //prevent default actions

            // Animate method to jump to div with classname of .details
            $('html, body').animate({
                scrollTop: ($('.details').offset().top)
            });
        }

        // Clearing values of all inputs
        $("#name").val("");
        $("#travellers").val("");
        $("#datepicker").val("");  
        $('#destination option').prop('selected', function () {
                return this.defaultSelected;
        });
    });
}); //ending ready funcion
