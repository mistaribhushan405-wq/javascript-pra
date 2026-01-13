let nameperson = document.getElementById("name");
let email  = document.getElementById("email"); 
let password = document.getElementById("password");
let form = document.getElementById("form");
let submit = document.getElementById("subtn");

function isValidDetails() {
    if (nameperson.value.trim() === "") {
        alert("Name cannot be empty");
        return false;
    }
    if (email.value.trim() === "") {
        alert("Email cannot be empty");
        return false;
    }
    if (password.value.trim() === "") {
        alert("Password cannot be empty");
        return false;
    }
    return true;
}
submit.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("Button clicked");
    console.log("Name:", nameperson.value);
    console.log("Email:", email.value);
    console.log("Password:", password.value);
    console.log("you done good")
    if (isValidDetails()) {
        alert("Form submitted successfully!");
        form.reset();
    }
});