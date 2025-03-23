document
  .getElementById("form__action")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission if validation fails
    let isValid = true;

    // Function to validate input fields
    function validateInput(input, message) {
      const errorMessage = input.nextElementSibling;
      if (input.value.trim() === "") {
        errorMessage.textContent = message;
        input.classList.add("error");
        isValid = false;
      } else {
        errorMessage.textContent = "";
        input.classList.remove("error");
      }
    }

    // Get input fields
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const phoneNumber = document.getElementById("phoneNumber");
    const select1 = document.getElementById("select1");
    const select2 = document.getElementById("select2");

    // Validate each field
    validateInput(firstName, "First name is required");
    validateInput(lastName, "Last name is required");

    if (!email.value.trim().match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      email.nextElementSibling.textContent = "Enter a valid email address";
      email.classList.add("error");
      isValid = false;
    } else {
      email.nextElementSibling.textContent = "";
      email.classList.remove("error");
    }

    if (!phoneNumber.value.trim().match(/^\d{10,15}$/)) {
      phoneNumber.nextElementSibling.textContent =
        "Enter a valid phone number (10-15 digits)";
      phoneNumber.classList.add("error");
      isValid = false;
    } else {
      phoneNumber.nextElementSibling.textContent = "";
      phoneNumber.classList.remove("error");
    }

    validateInput(select1, "Please select an option");
    validateInput(select2, "Please select an option");

    // If the form is valid, submit it
    if (isValid) {
      alert("Form submitted successfully!");
      this.submit();
    }
  });
