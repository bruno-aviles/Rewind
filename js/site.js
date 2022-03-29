// Get the string from the page
// controller function
function getValue(){
    
    document.getElementById("alert").classList.add("invisible");
    
    let userString = document.getElementById("userString").value;  
    let revString = reverseString(userString);
    
    displayString(revString);
}

// Reverse the string
// logic function
function reverseString(userString){

    let revString = [];

    // reverse a string using a for loop
    for (let index = userString.length - 1 ; index >= 0; index--) {
        revString += userString[index];        
    }

    return revString;
}

// Display the reversed string to the user
// view function
function displayString(revString){

    if (/^[a-zA-z]+$/.test(revString)) {
        // write to the page
        document.getElementById("validation").innerHTML = `Well Done!`
        document.getElementById("msg").innerHTML = `Your word reversed is: ${revString}`;
        // show the alert box
        document.getElementById("alert").classList.remove("invisible");
    } else {
        // write to the page
        document.getElementById("validation").innerHTML = `Something Went Wrong`
        document.getElementById("msg").innerHTML = `Please Type In One Word At A Time & ONLY Letters`;
        // show alert box
        document.getElementById("alert").classList.remove("invisible");
    }
}