let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signinBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    title.innerText = "Sign In";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
};

signupBtn.onclick = function(){
    nameField.style.maxHeight = "60px";
    title.innerText = "Sign Up";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
};
function login() {
    // Your login logic goes here
    // For this example, let's assume the login is successful
    // Redirect to the profile page
    window.location.href = "profile.html";
}

// Add event listener to the sign-in button
document.getElementById("signinBtn").addEventListener("click", function() {
    login(); // Call the login function when the sign-in button is clicked
});
