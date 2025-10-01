function fetchGoogleBooks(term) {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}`)
      .then(res => res.json())
      .then(data => {
        console.log(data.items);
        return Array.isArray(data.items) ? data.items : [];
      })
      .catch(err => {
        console.error("Error fetching google books:", err);
        return [];
      });
  }

  export default fetchGoogleBooks;