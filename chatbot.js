const chatbot = document.getElementById("chatbot");
const chatbotToggle = document.getElementById("chatbotToggle");
const closeChatbot = document.getElementById("closeChatbot");
const chatbotBody = document.getElementById("chatbotBody");
const chatbotInput = document.getElementById("chatbotInput");
const chatbotSubmit = document.getElementById("chatbotSubmit");

chatbotToggle.addEventListener("click", () => {
  if (chatbot.style.display === "block") {
    chatbot.style.display = "none";
  } else {
    chatbot.style.display = "block";
  }
});
closeChatbot.addEventListener("click", () => {
  chatbot.style.display = "none";
});

chatbotSubmit.addEventListener("click", () => {
  if (chatbotInput.value.trim() !== "") {
    chatbotInput.value = ""; // Clear input field
    showForm();
  }
});

function showForm() {
  const now = new Date();
  const timeString = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const formDiv = document.createElement("div");
  formDiv.classList.add("message", "form-message");
  formDiv.innerHTML = `
      <span class="timestamp">${timeString}</span>
      <p>Hey there, please leave your details so we can contact you.</p>
      <form onsubmit="return submitForm(this)">
          <input type="text" id="userName" class="chatbot-input" placeholder="Name" required>
          <input type="email" id="userEmail" class="chatbot-input" placeholder="Email" required>
          <button type="submit" class="chatbot-submit">Submit</button>
      </form>
      <p id="errorMessage" style="color: red; display: none;">Please enter valid details.</p>
  `;
  chatbotBody.appendChild(formDiv);
  chatbotBody.scrollTop = chatbotBody.scrollHeight;
}

function submitForm(form) {
  const name = form.querySelector("#userName").value.trim();
  const email = form.querySelector("#userEmail").value.trim();
  const errorMessage = form.querySelector("#errorMessage");

  if (name === "" || email === "") {
    errorMessage.style.display = "block";
    return false;
  }

  if (!validateEmail(email)) {
    errorMessage.textContent = "Please enter a valid email.";
    errorMessage.style.display = "block";
    return false;
  }

  sendSound.play();

  form.parentElement.remove();

  const now = new Date();
  const timeString = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const successMessage = document.createElement("div");
  successMessage.classList.add("message", "bot-message");
  successMessage.innerHTML = `<span class="timestamp">${timeString}</span> Message sent successfully! We will get in touch shortly.`;
  chatbotBody.appendChild(successMessage);
  chatbotBody.scrollTop = chatbotBody.scrollHeight;

  return false;
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function submitForm(button) {
  const name = button.parentElement.querySelector("#userName").value.trim();
  const email = button.parentElement.querySelector("#userEmail").value.trim();

  if (name === "" || email === "") {
    alert("Please fill in both fields.");
    return;
  }

  // Remove form after submission
  button.parentElement.remove();

  // Add confirmation message
  const successMessage = document.createElement("div");
  successMessage.classList.add("message", "bot-message");
  successMessage.innerText =
    "Message sent successfully! We will get in touch shortly.";
  chatbotBody.appendChild(successMessage);
  chatbotBody.scrollTop = chatbotBody.scrollHeight;
}
