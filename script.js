document.getElementById('jokeButton').addEventListener('click', getJoke);

async function getJoke() {
    const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
            'X-RapidAPI-Key': '5f5cc6f712mshd7e5d9adda68b1ap158ce7jsncfc7f9c78d2e.rapidapi.com' // Replace with your actual API key
        }
        
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        document.getElementById('joke').innerText = data.body[0].setup + " " + data.body[0].punchline;
        
    } catch (error) {
        console.error('Error fetching joke:', error);
        document.getElementById('joke').innerText = "Oops! Couldn't fetch a joke.";
    }
}
