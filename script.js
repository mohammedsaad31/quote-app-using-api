const url = 'https://famous-quotes4.p.rapidapi.com/random?category=all&count=2';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9976d18763msh197a2ff1cdd45a1p106e7djsnd7a287dfeb68',
		'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
// ...

// Function to handle the search input
function searchQuotes() {
    // Get the search input value
    const searchTerm = document.getElementById('search').value.toLowerCase();

    // Get the quote container
    const quoteContainer = document.querySelector('.quote-container');

    // Filter quotes based on the search term
    const filteredQuotes = quotes.filter((quote) =>
        quote.toLowerCase().includes(searchTerm)
    );

    // Display the filtered quote or a message if no match is found
    if (filteredQuotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
        const selectedQuote = filteredQuotes[randomIndex];

        // Update the quote container
        quoteContainer.innerHTML = `<p>${selectedQuote}</p><img src="img.jpeg" alt="pic" class="img">`;
    } else {
        quoteContainer.innerHTML = '<p>No matching quotes found</p>';
    }
}

// Function to fetch and display a random quote
async function getRandomQuote() {
    try {
        const response = await fetch(url, options);
        const result = await response.json(); // Assuming the response is in JSON format
        const quote = result[0].text; // Adjust this based on the structure of the response

        // Update the quote container
        const quoteContainer = document.querySelector('.quote-container');
        quoteContainer.innerHTML = `<p>${quote}</p><img src="img.jpeg" alt="pic" class="img">`;
    } catch (error) {
        console.error(error);
    }
}

// ...

