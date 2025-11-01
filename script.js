// 🌗 Theme Toggle
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  themeBtn.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Load saved theme
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeBtn.textContent = '☀️';
  }
});

// 🤖 AI Chatbot (offline logic for now)
const openChat = document.getElementById('openChat');
const closeChat = document.getElementById('closeChat');
const chatSection = document.getElementById('chatbotSection');
const chatWindow = document.getElementById('chatWindow');
const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');

openChat.addEventListener('click', () => chatSection.classList.remove('hidden'));
closeChat.addEventListener('click', () => chatSection.classList.add('hidden'));

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const msg = userInput.value.trim();
  if (!msg) return;

  addMessage(msg, 'user');
  userInput.value = '';

  // Fake AI Tutor Response
  setTimeout(() => {
    let reply = generateReply(msg);
    addMessage(reply, 'bot');
  }, 700);
}

function addMessage(text, sender) {
  const p = document.createElement('p');
  p.classList.add(sender);
  p.textContent = text;
  chatWindow.appendChild(p);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function generateReply(input) {
  input = input.toLowerCase();

  if (input.includes('photosynthesis')) {
    return 'Photosynthesis is the process by which green plants use sunlight to make food from carbon dioxide and water.';
  } else if (input.includes('chemistry')) {
    return 'In Chemistry, focus on balancing equations, atomic structure, and AKUEB past MCQs — they repeat often.';
  } else if (input.includes('quiz')) {
    return 'Here’s a quick quiz: 1️⃣ What is the formula of glucose? 2️⃣ Who discovered oxygen? 3️⃣ Define exothermic reaction.';
  } else if (input.includes('hello') || input.includes('hi')) {
    return 'Hey there! 👋 How can I help you study today?';
  } else if (input.includes('past paper')) {
    return 'You can find AKUEB past papers under “Past Papers” section — organized by class and subject.';
  } else if (input.includes('thank')) {
    return 'You’re welcome! 😊 Keep learning smartly!';
  } else {
    return 'I’m not sure about that yet, but I’ll soon connect to ChatGPT for deeper explanations.';
  }
}

// 🔍 Search Functionality (for future data connection)
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', (e) => {
  const query = e.target.value.toLowerCase();
  console.log("Searching for:", query);
  // In future: filter topics/papers dynamically here
});
