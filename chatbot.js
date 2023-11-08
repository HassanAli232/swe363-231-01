const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Predefined questions and answers
const chatResponses = {
  "How are you?": "I am great, What about you?",
  "What is your name?": "I am the smartest chatbot Aareef.",
  "Who created you?": "I was created by Hassan.",
  "Tell me a joke.":
    "Sure, here it is: Why don`t scientists trust atoms? Because they make up everything!",
  "What is your favorite color?":
    "I don`t see colors as you, but I would prefer blue #0000FF.",
  "Tell me something interesting.": "I am the smartest chatbot ;).",
  "How can I learn AI?":
    "Use AI simplified website. It is a webstie created by Hassan like me.",
  Exit: "Goodbye! Have a great day.",
};

// Function to get a response based on user input
function getChatResponse(userInput) {
  const lowerCaseInput = userInput.toLowerCase();

  for (const question in chatResponses) {
    if (lowerCaseInput.includes(question.toLowerCase())) {
      return chatResponses[question];
    }
  }
  return "I do not understand. Can you please ask another question?";
}

// Function to continuously prompt the user for input
function chat() {
  reader.question("You: ", (userInput) => {
    if (
      userInput.toLowerCase() === "exit" ||
      userInput.toLowerCase() === "quit"
    ) {
      console.log("Chatbot: Goodbye! Have a great day.");
      reader.close();
    } else {
      const response = getChatResponse(userInput);
      console.log(`Chatbot: ${response}`);
      chat(); // Continue the conversation
    }
  });
}

// Start the chat
console.log(
  'Chatbot: Hello! Ask me anything. Type "exit" or "quit" to end the conversation.'
);
chat();
