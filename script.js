const quotes = [
    { text: "And I think about all the things we could be / if we were never told our bodies were not built for them.", page: 188 },
    { text: "Their gazes and words / are heavy with all the things / they want you to be.", page: 21 },
    { text: "She has a way of guilting me compliant / Usually it works", page: 56 },
    { text: "Sometimes it seems like writing is the only way I keep from hurting", page: 41 },
    { text: "Just because your father's present / doesn't mean he isn't absent", page: 65 },
    { text: "I can feel the hot eye of the Jesus statue / watching me hide the wafer beneath the bench, / where his holy body will now feed the mice.", page: 67 },
    { text: "Something in my chest flutters like a bird / whose wings are being gripped still / by the firmest fingers.", page: 68 },
    { text: "Sometimes I think I'm the only one / trying to protect you from yourself. - Caridad", page: 72 },
    // Add more quotes here
];

const acevedoFacts = [
    "Elizabeth Acevedo won the National Book Award for Young People's Literature in 2018.",
    "Before becoming a novelist, Elizabeth Acevedo was a spoken word poet and performed in various poetry slams and events.",
    "Elizabeth Acevedo was born in New York City to Dominican-American parents and her heritage significantly influences her writing.",
    "Elizabeth Acevedo is fluent in both English and Spanish, and her works often incorporate elements of both languages.",
    "In addition to *The Poet X*, Elizabeth Acevedo published a poetry collection titled *Clap When You Land*.",
    "In September 2022, the Poetry Foundation named Elizabeth Acevedo the year's Young People's Poet Laureate.",
    "Acevedo competed in her first poetry slam at the Nuyorican Poets Café at 14 years old.",
    "She went to church every Sunday with her mother and participated in every sacrament, and despite not practicing Catholicism anymore, describes her religious relationship as evolving.",
    "Acevedo began her career teaching eighth grade, where she learned that many students did not feel limited by their capabilities but by a lack of diversity in the books they read.",
    // Add more facts here
];

const meFacts = [
    "I love coding and creating websites.",
    "I am passionate about history and languages.",
    "I enjoy strategy games and spend time exploring new game mechanics.",
    "I’m interested in journalism and how the shift in how we've consumed the news has affected our perspectives.",
    "I like to incorporate clean, modern designs in my personal projects.",
    "I am working on a website that features military and technological products.",
    "I am also interested in cybersecurity and follow developments in that field.",
    "I have a keen interest in languages, including learning and creating new ones."
];

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateContent() {
    const selectedTab = document.querySelector('.tab.active').getAttribute('data-tab');
    let content;
    
    switch (selectedTab) {
        case 'quote':
            const randomQuote = getRandomElement(quotes);
            content = `"${randomQuote.text}" - Page ${randomQuote.page}`;
            break;
        case 'acevedo':
            content = getRandomElement(acevedoFacts);
            break;
        case 'me':
            content = getRandomElement(meFacts);
            break;
        default:
            content = "Please select a tab.";
    }
    
    document.getElementById('output').innerText = content;
    changeBackground();
}


function activateTab(tabName) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`.tab[data-tab="${tabName}"]`).classList.add('active');
}

document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => activateTab(tab.getAttribute('data-tab')));
});

// Easter Egg
document.body.addEventListener('dblclick', () => {
    document.getElementById('secret').style.display = 'block';
});

// Set current date in footer
document.getElementById('date').textContent = new Date().toLocaleDateString();

// Auto-play background music with user interaction fallback
document.getElementById('backgroundMusic').play().catch(error => {
    console.log('Autoplay prevented by browser. Please interact with the page.');
});

document.getElementById('generate').addEventListener('click', function() {
    var audio = document.getElementById('backgroundMusic');
    audio.play();
});
