function saveProfile() {
    // Retrieve input values
    var age = document.getElementById("age").value;
    var dob = document.getElementById("dob").value;
    var contact = document.getElementById("contact").value;
    var address = document.getElementById("address").value;
    var fatherName = document.getElementById("father").value;
    var motherName = document.getElementById("mother").value;
    var familyIncome = document.getElementById("income").value;
    var githubLink = document.getElementById("github").value;
    var linkedinLink = document.getElementById("linkedin").value;

}

// Add event listener to the form submit button
document.getElementById("submitBtn").addEventListener("click", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Call the function to save profile
    saveProfile();
});