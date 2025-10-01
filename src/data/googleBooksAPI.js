const api_url = "https://www.googleapis.com";
function fetchGoogleBooks(term) {
    return fetch(`${api_url}/books/v1/volumes?q=${term}`)
      .then(res => res.json())
      .then(data => {
        return Array.isArray(data.items) ? data.items : [];
      })
      .catch(err => {
        console.error("Error fetching google books:", err);
        return [];
      });
  }

  export default fetchGoogleBooks;