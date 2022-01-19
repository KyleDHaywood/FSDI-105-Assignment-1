const LS_KEY = "users";

function saveUser(user) {
  //load the old data
  let oldData = readUsers();
  //merge the data
  oldData.push(user);
  let value = JSON.stringify(oldData); // parse into a json string
  localStorage.setItem(LS_KEY, value);
  //user is an object
}

function readUsers() {
  //get values from localStorage

  let currentUser = localStorage.getItem(LS_KEY);
  if (!currentUser) {
    //no data
    return []; //create array on first registration
  } else {
    let registeredUsers = JSON.parse(currentUser); // parse string back into obj/array
    //console.log(currentUser);
    //console.log(registeredUsers);
    return registeredUsers;
  }
}
