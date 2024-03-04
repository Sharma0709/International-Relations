// script.js

let conversationState = "INITIAL"; // Initial conversation state

function toggleChat() {
    var chatContainer = document.getElementById("chat-container");
    if (chatContainer.style.display === "" || chatContainer.style.display === "none") {
        chatContainer.style.display = "block";
        displayOptions(); // Display question options when chat is opened
    } else {
        chatContainer.style.display = "none";
    }
}


function selectQuestion(question) {
    displayMessage(question, true); // Display selected question
    if (question === "Exit") {
        displayMessage("Thank you for chatting with us. Goodbye!", false);
        conversationState = "EXIT";
        scrollToBottom();
        setTimeout(closeChatInterface, 2000);
    } else {
        const answer = getAnswer(question); // Get answer for selected question
        displayMessage(answer, false); // Display answer
        displayOptions(); // Display question options again
        scrollToBottom();
    }
    
}

function closeChatInterface() {
    var chatContainer = document.getElementById("chat-container");
    chatContainer.style.display = "none";
}


function getAnswer(question) {
    switch (question) {
        case "Programmes provided":
            return "We offer a variety of undergraduate and graduate programs in various disciplines.";
        case "Amenities in the College":
            return "Our college provides state-of-the-art facilities including a library, computer labs, sports facilities, and more.";
        case "Hostel facilities":
            return "We have comfortable hostel facilities for both male and female students with all necessary amenities.";
        case "Important email handles":
            return "You can reach out to our administration at admin@example.com and our admissions team at admissions@example.com.";
        case "Embassy details":
            return "For embassy details, please visit our website or contact our international office.";
        default:
            return "Sorry, I don't have information on that topic.";
    }
}

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        displayMessage(userInput, true);
        selectQuestion(userInput); // Process user input as the selected question
        document.getElementById("user-input").value = "";
    }
}

function displayOptions() {
    if (conversationState !== "EXIT") {
        const chatBox = document.getElementById("chat-box");
        const options = ["Programmes provided", "Amenities in the College", "Hostel facilities", "Important email handles", "Embassy details", "Exit"];
        const optionsHTML = options.map(option => `<button onclick="selectQuestion('${option}')">${option}</button>`).join(' ');
        const optionsElement = document.createElement("div");
        optionsElement.classList.add("bot-message");
        optionsElement.innerHTML = optionsHTML;
        chatBox.appendChild(optionsElement); // Append options to chat box
        scrollToBottom();
    }
}

function displayMessage(message, isUser) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.classList.add(isUser ? "user-message" : "bot-message");
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
}

function scrollToBottom() {
    var chatInterface = document.getElementById("chat-container"); // Replace "chat-interface" with the actual ID of your chat interface element
    chatInterface.scrollTop = chatInterface.scrollHeight;
}

//-------

document.addEventListener("DOMContentLoaded", function() {
    showAlert();
});

function showAlert() {
    const messageContainer = document.getElementById("message-container");
    messageContainer.style.display = "block";
    setTimeout(function() {
        messageContainer.style.display = "none";
    }, 3000); // Hide the message after 5 seconds
}
