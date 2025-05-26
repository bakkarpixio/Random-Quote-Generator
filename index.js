const quotes = [
    {
        text: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein"
    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        text: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        text: "Happiness is not something ready made. It comes from your own actions.",
        author: "Dalai Lama"
    }
];
const quoteEl = document.getElementById("quote")
const authorEl = document.getElementById("author")

function displayQoute() {
    let random = Math.floor(Math.random() * quotes.length)
    let selected = quotes[random]

    quoteEl.style.opacity = "0"
    authorEl.style.opacity = "0"
    quoteEl.style.transition = "0.5s ease-in-out"
    authorEl.style.transition = "0.5s ease-in-out"

    setTimeout(() => {
        quoteEl.textContent = `"${selected.text}"`;
        authorEl.textContent = `- ${selected.author}`;
        quoteEl.style.opacity = "1"
        authorEl.style.opacity = "1"
    }, 500);
}

document.querySelector("button").addEventListener("click", displayQoute)
