
function Details() {
    var x, text;
    //Name
    x = document.getElementById("name").value;
    
    // Condition
    if (!isNaN(x) || x == "") {
        text = "Invalid Input";
    } else {
        text = "Correct";
    }
    document.getElementById("errorName").innerHTML = text;


    // Address
    x = document.getElementById("address").value;

    // Condition
    if (!isNaN(x) || x == "") {
        text = "Invalid Input";
    } else {
        text = "Correct";
    }
    document.getElementById("errorAddress").innerHTML = text;
    
    
    // City
    x = document.getElementById("city").value;

    // Condition
    if (!isNaN(x) || x == "") {
        text = "Invalid Input";
    } else {
        text = "Correct";
    }
    document.getElementById("errorCity").innerHTML = text;
    
    
    // Phone Number
    x = document.getElementById("phoneNumber").value;

    //Condition
    if (!isNaN(x) || x == "") {
        text = "Invalid Input";
    } else {
        text = "Correct";
    }
    document.getElementById("errorphoneNumber").innerHTML = text;
    
    
    
    // Email
    x = document.getElementById("emailAddress").value;

    // Condition
    if (!isNaN(x) || x == "") {
        text = "Invalid Input";
    } else {
        text = "Correct";
    }
    document.getElementById("erroremailAddress").innerHTML = text;
   
   
    // Make
    x = document.getElementById("make").value;

    // Condition
    if (!isNaN(x) || x == "") {
        text = "Invalid Input";
    } else {
        text = "Correct";
    }
    document.getElementById("errorMake").innerHTML = text;

    // Model
    x = document.getElementById("model").value;

    // Condition
    if (!isNaN(x) || x == "") {
        text = "Invalid Input";
    } else {
        text = "Correct";
    }
    document.getElementById("errorModel").innerHTML = text;

    // Year
    x = document.getElementById("year").value;

    // Condition
    if (!isNaN(x) || x == "") {
        text = "Invalid Input";
    } else {
        text = "Correct";
    }
    document.getElementById("errorYear").innerHTML = text;
}




    
