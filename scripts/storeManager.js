function saveUser(user) {
  let value = JSON.stringify(user);
  localStorage.setItem("user", value);
}
