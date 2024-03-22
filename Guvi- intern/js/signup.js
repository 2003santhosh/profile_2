let signupBtn = document.getElementById("signupBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signupBtn.onclick = function(){
    nameField.style.maxHeight = "60px";
    title.innerText = "Sign Up";
};
