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
  const formDiv = document.createElement("div");
  formDiv.classList.add("message", "form-message");
  formDiv.innerHTML = `
                <p>Hey there, please leave your details so we can contact you.</p>
                <input type="text" id="userName" class="chatbot-input" placeholder="Name">
                <input type="email" id="userEmail" class="chatbot-input" placeholder="Email">
                <button onclick="submitForm(this)" class="chatbot-submit">Submit</button>
            `;
  chatbotBody.appendChild(formDiv);
  chatbotBody.scrollTop = chatbotBody.scrollHeight;
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
  successMessage.innerText = "Message sent successfully!";
  chatbotBody.appendChild(successMessage);
  chatbotBody.scrollTop = chatbotBody.scrollHeight;
}
