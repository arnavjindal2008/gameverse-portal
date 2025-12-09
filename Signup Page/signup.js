 const button = document.getElementById("button");
  const error = document.getElementById("error");
  const error1 = document.getElementById("error1");
  
  let database = JSON.parse(localStorage.getItem("data")) || [];

  button.addEventListener("click", Signup);

  function Signup(event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmpassword = document.getElementById("confirm").value;

      if (name === "") 
          return showError("Enter your Name First");

      if (email === "")
          return showError("Enter your Email First");

      if (!email.endsWith("@nst.rishihood.edu.in"))
          return showError("Enter a valid Institutional Email");

      if (password === "")
          return showError("Enter the Password First");

      if (!password.includes("@") && !password.includes("$"))
          return showError("Password must contain @ or $");

      if (password !== confirmpassword)
          return showError("Passwords do not match");

      // CHECKING DATABASE FOR ALREADY EXISTS DATA OF USER

      for (let i = 0; i < database.length; i++) {
          if (database[i].mail === email) {
              return showError("Account Already Exists");
          }
      }

      const userdata = {
          fullName: name,
          mail: email,
          pass: password
      };

      database.push(userdata);
      localStorage.setItem("data", JSON.stringify(database));

      return showError1("Signup Successful");
  };

  function showError(msg) {
      error.innerText = msg;
      clearFields()
  };

  function showError1(msg) {
      error1.innerText = msg;
      window.location.href = "../Login Page/login.html"
  };

  function clearFields() {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      document.getElementById("confirm").value = "";
  };