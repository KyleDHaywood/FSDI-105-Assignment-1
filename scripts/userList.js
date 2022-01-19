function createRow(users) {
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    let tmp = `<tr>
    <td>${user.firstName} </td>
    <td>${user.lastName} </td>
    <td>${user.email} </td>
    <td>${user.password} </td>
    <td>${user.age} </td>
    <td>${user.address} </td>
    <td>${user.phone} </td>
    <td>${user.payment} </td>
    <td bgcolor = ${user.color}>   </td>
    </tr>`;
    console.log(tmp);
    $("#usersTable").append(tmp);
  }
}

function init() {
  console.log("Listing Users");
  let users = readUsers();
  createRow(users);
  console.log(users);
}

/*
function signIn() {
  let text;
  let users = $(();
  let inputEmail = $("#inputEmail").val();
  let inputPassword = $("#inputPassword").val();
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    if (inputEmail == user.email && inputPassword == user.password) {
      alert("login succeful");
    } else {
      alert("login failed");
    }
  }
}
*/

window.onload = init;
