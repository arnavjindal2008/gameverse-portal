  let database = JSON.parse(localStorage.getItem("data")) || [];

  const button = document.getElementById("button");
  const error = document.getElementById("error");
  const error1 = document.getElementById("error1");

  button.addEventListener("click", Login);

  function Login(event) {
      event.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (email === "" || password === "") {
        return showError("Enter Details First");
      }

      for (let i = 0; i < database.length; i++) {
        if (database[i].mail === email && database[i].pass === password) {
          return showError1("Login Successful");
        }
      }
      return showError("Invalid Credentials");
  };

  function showError(msg) {
      error.innerText = msg;
      clearFields()
  };

  function showError1(msg) {
      error1.innerText = msg;
      window.location.href = "../Home Page/home.html"
  };

  function clearFields() {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      document.getElementById("confirm").value = "";
  };