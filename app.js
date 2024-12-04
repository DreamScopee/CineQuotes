const quotes = [
  { quote: "May the Force be with you.", author: "Star Wars" },
  { quote: "I'll be back.", author: "The Terminator" },
  { quote: "Here's looking at you, kid.", author: "Casablanca" },
  { quote: "I'm king of the world!", author: "Titanic" },
  { quote: "Why so serious?", author: "The Dark Knight" },
  { quote: "I see dead people.", author: "The Sixth Sense" },
  { quote: "Houston, we have a problem.", author: "Apollo 13" },
  { quote: "Keep your friends close, but your enemies closer.", author: "The Godfather Part II" },
  { quote: "You talking to me?", author: "Taxi Driver" },
  { quote: "Life is like a box of chocolates. You never know what you're gonna get.", author: "Forrest Gump" },
  { quote: "E.T. phone home.", author: "E.T. the Extra-Terrestrial" },
  { quote: "Frankly, my dear, I don't give a damn.", author: "Gone with the Wind" },
  { quote: "You can't handle the truth!", author: "A Few Good Men" },
  { quote: "To infinity and beyond!", author: "Toy Story" },
  { quote: "Just keep swimming.", author: "Finding Nemo" },
  { quote: "I am your father.", author: "Star Wars: The Empire Strikes Back" },
  { quote: "Here's Johnny!", author: "The Shining" },
  { quote: "I'm the king of the world!", author: "Titanic" },
  { quote: "Wakanda forever!", author: "Black Panther" },
  { quote: "With great power comes great responsibility.", author: "Spider-Man" },
  { quote: "Hasta la vista, baby.", author: "Terminator 2: Judgment Day" },
  { quote: "Say hello to my little friend!", author: "Scarface" },
  { quote: "You had me at 'hello.'", author: "Jerry Maguire" },
  { quote: "Elementary, my dear Watson.", author: "Sherlock Holmes" },
  { quote: "I'm gonna make him an offer he can't refuse.", author: "The Godfather" },
  { quote: "Bond. James Bond.", author: "Dr. No" },
  { quote: "It’s a trap!", author: "Star Wars: Return of the Jedi" },
  { quote: "Why don't you come up sometime and see me?", author: "She Done Him Wrong" },
  { quote: "There's no place like home.", author: "The Wizard of Oz" },
  { quote: "Carpe diem. Seize the day, boys.", author: "Dead Poets Society" },
  { quote: "I feel the need—the need for speed!", author: "Top Gun" },
  { quote: "You're gonna need a bigger boat.", author: "Jaws" },
  { quote: "Magic Mirror on the wall, who is the fairest one of all?", author: "Snow White and the Seven Dwarfs" },
  { quote: "Just when I thought I was out, they pull me back in.", author: "The Godfather Part III" },
  { quote: "I'm walking here! I'm walking here!", author: "Midnight Cowboy" },
  { quote: "After all, tomorrow is another day!", author: "Gone with the Wind" },
  { quote: "A martini. Shaken, not stirred.", author: "Goldfinger" },
  { quote: "I'll have what she's having.", author: "When Harry Met Sally" },
  { quote: "The first rule of Fight Club is: You do not talk about Fight Club.", author: "Fight Club" },
  { quote: "Why are you trying so hard to fit in when you were born to stand out?", author: "What a Girl Wants" },
  { quote: "I wish I knew how to quit you.", author: "Brokeback Mountain" },
  { quote: "You is kind. You is smart. You is important.", author: "The Help" },
  { quote: "I drink your milkshake!", author: "There Will Be Blood" },
  { quote: "I solemnly swear that I am up to no good.", author: "Harry Potter and the Prisoner of Azkaban" },
  { quote: "Fear is the path to the dark side.", author: "Star Wars: The Phantom Menace" },
  { quote: "To infinity and beyond!", author: "Toy Story" },
  { quote: "It’s not who I am underneath, but what I do that defines me.", author: "Batman Begins" },
  { quote: "You complete me.", author: "Jerry Maguire" },
  { quote: "I am inevitable.", author: "Avengers: Endgame" },
  { quote: "I am Iron Man.", author: "Iron Man" },
  { quote: "Part of the journey is the end.", author: "Avengers: Endgame" },
  { quote: "Every man dies, not every man really lives.", author: "Braveheart" },
  { quote: "Freedom!", author: "Braveheart" },
  { quote: "Hasta la vista, baby.", author: "Terminator 2: Judgment Day" },
  { quote: "I will find you and I will kill you.", author: "Taken" },
  { quote: "Do. Or do not. There is no try.", author: "Star Wars: The Empire Strikes Back" },
  { quote: "Roads? Where we’re going, we don’t need roads.", author: "Back to the Future" },
  { quote: "The greatest trick the Devil ever pulled was convincing the world he didn’t exist.", author: "The Usual Suspects" },
  { quote: "You can’t fight in here! This is the War Room!", author: "Dr. Strangelove" },
  { quote: "I’m as mad as hell, and I’m not going to take this anymore!", author: "Network" },
  { quote: "Toto, I’ve a feeling we’re not in Kansas anymore.", author: "The Wizard of Oz" },
];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const copyQuoteBtn = document.getElementById("copy-quote");

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteText.textContent = `"${randomQuote.quote}"`;
  authorText.textContent = `- ${randomQuote.author}`;
}

function copyQuote() {
  const textToCopy = `${quoteText.textContent} ${authorText.textContent}`;
  navigator.clipboard.writeText(textToCopy).then(() => {
    alert("Quote copied to clipboard!");
  });
}

newQuoteBtn.addEventListener("click", getRandomQuote);
copyQuoteBtn.addEventListener("click", copyQuote);

// Initialize with a random quote
getRandomQuote();
