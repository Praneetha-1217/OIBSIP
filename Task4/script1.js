var users = [ ];
function register() {
  var username = document.getElementById('registerUsername').value;
  var password = document.getElementById('registerPassword').value;

  if (users.some(user=>user.username === username)) {
    window.alert('Username already exists. Please choose another one.');
    return;
  }
}
function login() {
  var username = document.getElementById('loginUsername').value;
  var password = document.getElementById('loginPassword').value;
  
  var user = users.find(user=>user.username === username && user.password === password);
  if (user) {
    window.alert('Login successful!');
    showSecuredPage();
  } else {
    window.alert('Invalid username or password. Please try again.');
  }
}
function showLoginForm() {
  document.getElementById('loginForm').style="display:block;"
  document.getElementById('registerForm').style="display:none;"
  document.getElementById('securedPage').style="display:none;"
}
function showSecuredPage() {
  document.getElementById('loginForm').style="display:loginsuccessfull;"
  document.getElementById('registerForm').style="display:none;";
  document.getElementById('securedPage').style="display:block;";
}
