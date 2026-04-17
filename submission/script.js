/*
 * Author: [Justin Francis M. Llaguno]
 * Date: [4/17/2026]
 * Purpose: Full form validation for my website
 */

//Function that validates the form
function validateForm() {
    // Clears old messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("birthError").innerHTML = "";
    document.getElementById("sexError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("usernameError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("passwordConfirmError").innerHTML = "";
    document.getElementById("dropdownError").innerHTML = "";
    document.getElementById("checkboxError").innerHTML = "";
    document.getElementById("relapseError").innerHTML = "";
    document.getElementById("success").innerHTML = "";

    //Sets the variable "isValid" into true
    let isValid = true;

    // Checking the inputs
    
// ==================== SECTION 1: PERSONAL INFORMATION ====================

    //Full name, checks if the input is more that 2 characters
    let fullName = document.getElementById("fullName").value.trim();
    if (fullName.length < 2) {
        document.getElementById("nameError").innerHTML = "*Full name must be at least 2 characters.";
        //Turns the variable isValid into false
        isValid = false;
    }

    //Checks if the birthdate is valid, cannot be empty, must be atleast 13 years old
    let birthDate = document.getElementById("birthDate").value;
    //Checks if the birthdate is empty
    if (birthDate === "") {
        document.getElementById("birthError").innerHTML = "*Birthdate is required.";
        //Turns the variable isValid into false
        isValid = false;
    } else {
        //Formula to get the age, based on year only
        let age = new Date().getFullYear() - new Date(birthDate).getFullYear();
        ////Checks if your age is above or equal to 13 years old
        if (age <= 13) {
            document.getElementById("birthError").innerHTML = "*You must be at least 13 years old.";
            //Turns the variable isValid into false
            isValid = false;
        }
    }

    // Just checks if a radio button is clicked
    const sexOptions = document.getElementsByName("sex");
    let sexSelected = false;
    for (let i = 0; i < sexOptions.length; i++) { // B1: for loop to check each individual radio button
        if (sexOptions[i].checked) {
            sexSelected = true;
            break; //breaks once true to save time
        }
    }
    //Checks if it needs to send a message depending if you seletected a radio button
    if (!sexSelected) {
        document.getElementById("sexError").innerHTML = "Please select your sex.";
        //Turns the variable isValid into false
        isValid = false;
    }

    // Checks if the email is empty, or doesn't include @ or .
    const email = document.getElementById("email").value.trim();
    // Checks if the email is empty
    if (email === "") {
        document.getElementById("emailError").innerHTML = "*Email is required.";
        //Turns the variable isValid into false
        isValid = false;
    } 
    // Checks if the email includes @ or .
    else if (!email.includes("@") || email.indexOf("@") > email.lastIndexOf(".")) {
        document.getElementById("emailError").innerHTML = "*Email must contain @ and a dot after it.";
        //Turns the variable isValid into false
        isValid = false;
    }

// ==================== SECTION 2: ACCOUNT DETAILS ====================

    // Checks if the username is 8-20 characters with no spaces or symbols
    const username = document.getElementById("username").value.trim();
    const lettersAndNumbers = /^[a-zA-Z0-9]+$/; 
    //Checks if username is empty
    if (username === "") {
        document.getElementById("usernameError").innerHTML = "*Username is required.";
        //Turns the variable isValid into false
        isValid = false;
    } 
    //Checks if the username length is valid
    else if (username.length < 8 || username.length > 20) {
        document.getElementById("usernameError").innerHTML = "*Username must be 8-20 characters.";
        //Turns the variable isValid into false
        isValid = false;
    } 
    //Checks if the username has symbols
    else if (!lettersAndNumbers.test(username)) {
        document.getElementById("usernameError").innerHTML = "*Username may only contain letters and numbers.";
        //Turns the variable isValid into false
        isValid = false;
    }

    // Checks the password, it must be atleast 10 characters, must have 1 uppercase and 1 lowercase and atleast 12 digit
    const password = document.getElementById("password").value;
    //Checks if password is empty
    if (password === "") {
        document.getElementById("passwordError").innerHTML = "*Password is required";
        //Turns the variable isValid into false
        isValid = false;
    }
    //Checks the password length if it is valid
    else if (password.length < 10) {
        document.getElementById("passwordError").innerHTML = "*Password must be at least 10 characters.";
        //Turns the variable isValid into false
        isValid = false;
    } 
    //Checks if the password has 1 uppercase letter
    else if (!/[A-Z]/.test(password)) {
        document.getElementById("passwordError").innerHTML = "*Password must contain at least one uppercase letter.";
        //Turns the variable isValid into false
        isValid = false;
    } 
    //Checks if the password has 1 lowercase letter
    else if (!/[a-z]/.test(password)) {
        document.getElementById("passwordError").innerHTML = "*Password must contain at least one lowercase letter.";
        //Turns the variable isValid into false
        isValid = false;
    } 
    //Checks if the password has 1 digit
    else if (!/[0-9]/.test(password)) {
        document.getElementById("passwordError").innerHTML = "*Password must contain at least one digit.";
        //Turns the variable isValid into false
        isValid = false;
    }

    // Checks if the password and the password confirm are the same
    const passwordConfirm = document.getElementById("passwordConfirm").value;
    if (passwordConfirm !== password) {
        document.getElementById("passwordConfirmError").innerHTML = "*Passwords do not match.";
        //Turns the variable isValid into false
        isValid = false;
    }

// ==================== SECTION 3: TOPIC QUESTIONS ====================

    //Checks whether or not you have selected an option in the dropdown
    const dropdown = document.getElementById("dropdown").value;
    if (dropdown === "") {
        document.getElementById("dropdownError").innerHTML = "*Please select a donation amount.";
        //Turns the variable isValid into false
        isValid = false;
    }

    // Checks if atleast 1 checkbox has been checked
    const checkboxes = document.getElementsByName("available");
    let checkboxSelected = false;
    //Loop to check if each checkbox was selected
    for (let i = 0; i < checkboxes.length; i++) { 
        if (checkboxes[i].checked) {
            checkboxSelected = true;
            //Breaks to save time
            break; 
        }
    }
    //Displays a message at checkbox error if none of the checkboxes were selected
    if (!checkboxSelected) {
        document.getElementById("checkboxError").innerHTML = "*Select at least one availability time.";
        //Turns the variable isValid into false
        isValid = false;
    }

    // It simply checks whether or not you relapse to trees
    const relapseOptions = document.getElementsByName("relapse");
    let relapseSelected = false;
    //A loop that checks each radio button if it was selected or not
    for (let i = 0; i < relapseOptions.length; i++) {
        if (relapseOptions[i].checked) {
            relapseSelected = true;
            //breaks to save time
            break;
        }
    }
    //Checks whether or not to send a message based on if you selected a checkbox
    if (!relapseSelected) {
        document.getElementById("relapseError").innerHTML = "*Did you move on?? Please select one";
        isValid = false;
    }

// ==================== Checking Submission ====================
    //Displays a success message when you are done!
    if (isValid) {
        document.getElementById("success").innerHTML = 
            "Welcome to Yggdrasil! Join us and save the trees! Your account is ready!";
    }

    return isValid;  // If it's false it prevents page reload
}

    
