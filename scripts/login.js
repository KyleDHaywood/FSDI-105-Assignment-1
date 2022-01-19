function login() {
  let inputEmail = $("#inputEmail").val();
  let inputPassword = $("#inputPassword").val();

  let userList = readUsers();
  let flag = false;
  for (let i = 0; i < userList.length; i++) {
    if (
      inputEmail == userList[i].email &&
      inputPassword == userList[i].password
    ) {
      console.log("login succeful");
      flag = true;
      window.location = "users.html";
    }
    if (flag == false) {
      console.log("login failed");
      $("#alert-error").removeClass("hide");
      setTimeout(function () {
        $("#alert-error").addClass("hide");
      }, 3000);
    }
  }
}

//console.log(displayUserList());

function init() {
  $("#btnLogin").click(login);
}

window.onload = init;
