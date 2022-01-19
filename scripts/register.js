console.log("Register");

//constructor class/function
class User {
  constructor(
    email,
    password,
    firstName,
    lastName,
    age,
    address,
    phone,
    payment,
    color
  ) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
    this.phone = phone;
    this.payment = payment;
    this.color = color;
  }
}

//register user function
function registerUser() {
  let email = $("#txtEmail").val(); /* Check your id on the html */
  let password = $("#txtPassword").val();
  let firstName = $("#txtFirstName").val();
  let lastName = $("#txtLastName").val();
  let age = $("#nbAge").val();
  let address = $("#txtAddress").val();
  let phone = $("#nbPhone").val();
  let payment = $("#selPayment").val();
  let color = $("#txtColor").val();

  let user = new User(
    email,
    password,
    firstName,
    lastName,
    age,
    address,
    phone,
    payment,
    color
  );
  if (isValid(user)) {
    console.log(user);
    saveUser(user);
    clearInput();
  }
}

function clearInput() {
  $("#txtEmail").val("");
  $("#txtPassword").val("");
  $("#txtFirstName").val("");
  $("#txtLastName").val("");
  $("#nbAge").val("");
  $("#txtAddress").val("");
  $("#nbPhone").val("");
  $("#selPayment").val("");
  $("#txtColor").val("");
}

function isValid(user) {
  let valid = true;

  $("#txtEmail").removeClass("error");
  if (user.email.length === 0) {
    valid = false;
    $("#txtEmail").addClass("error");
  }
  $("#txtPassword").removeClass("error");
  if (user.password.length === 0) {
    valid = false;
    $("#txtPassword").addClass("error");
  }
  $("#txtFirstName").removeClass("error");
  if (user.firstName.length === 0) {
    valid = false;
    $("#txtFirstName").addClass("error");
  }
  $("#txtLastName").removeClass("error");
  if (user.lastName.length === 0) {
    valid = false;
    $("#txtLastName").addClass("error");
  }
  if (user.age.length === 0) {
    valid = false;
  }
  if (user.address.length === 0) {
    valid = false;
  }
  if (user.phone.length === 0) {
    valid = false;
  }
  return valid;
}

/*
    if (inputEmail == null || inputEmail == "") {
    text = "User cancelled the prompt.";
  } else if { inputEmail
    text = "Hello " + person + "! How are you today?";
  }
  
  
}
*/
/*
$("#menu-container").click(function () {
  $("#menu-container").hide;
});
*/



function init() {
  console.log("Init Function");
  $("#btnSave").click(registerUser);
}
window.onload = init;
