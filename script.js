function login() {
    document.getElementById("signup_page").style.display = "none";
    document.getElementById("login_page").style.display = "block";
    document.getElementById("success").style.display = "none";
    document.getElementById("main_page").style.display = "none";

}
function signup() {
    document.getElementById("signup_page").style.display = "block";
    document.getElementById("login_page").style.display = "none";
    document.getElementById("success").style.display = "none";
    document.getElementById("main_page").style.display = "none";
}
function back() {
    document.getElementById("signup_page").style.display = "none";
    document.getElementById("login_page").style.display = "none";
    document.getElementById("main_page").style.display = "block";
    document.getElementById("success").style.display = "none";
}
function login_click() {
    var userEmail = document.getElementById("email_field_li").value;
    var userPass = document.getElementById("password_field_li").value;
    if (userEmail == "") {
        alert("Please enter email address");
        email_field_li.focus();
    }
    else if (userPass == "") {
        alert("Please enter password");
        password_field_li.focus();
    }
    else {
        firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            window.alert("Error : " + errorMessage);

        });
        alert("Log in Successful");
        welcome();

    }
}
function signup_click() {
    var userEmail = document.getElementById("email_field_su").value;
    var userPass = document.getElementById("password_field_su").value;

    if (userEmail == "") {
        alert("Please enter email address");
        email_field_su.focus();
    }
    else if (userPass == "") {
        alert("Please enter password");
        password_field_su.focus();
    }
    else{
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);

    });
    alert("Sign Up Successful");
}
}
function welcome() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.

            document.getElementById("success").style.display = "block";
            document.getElementById("signup_page").style.display = "none";
            document.getElementById("login_page").style.display = "none";
            document.getElementById("main_page").style.display = "none";

            var user = firebase.auth().currentUser;

            if (user != null) {

                var email_id = user.email;
                document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

            }
        }
    });
}
var input = document.getElementById("button");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.key == 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("button").click();
  }
});
