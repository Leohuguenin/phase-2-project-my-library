const api_url = "https://phase-2-project-my-library.onrender.com";

export function fetchCustomBooks() {
    return fetch(`${api_url}/books`)
      .then(res => res.json())
      .then(data => {
        return Array.isArray(data.items) ? data.items : [];
      })
      .catch(err => {
        console.error("Error fetching books:", err);
        return [];
      });
  }

export function addNewBook(newBook)  {
  return fetch(`${api_url}/books`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newBook),
  })
    .then((r) => r.json())
    .then(data => {
      return data ?? {};
    })
    .catch(err => {
      console.error("Error adding new book:", err);
      return {};
    });
}