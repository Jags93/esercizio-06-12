document.addEventListener("DOMContentLoaded", function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json())
    .then((data) => {
      displayBooks(data);
    })
    .catch((error) => console.error("Errore nella chiamata:", error));
  function displayBooks(books) {
    const listaLibriContainer = document.getElementById("listaLibri");

    books.forEach((book) => {
      const card = document.createElement("div");
      card.classList.add("col-md-3", "mb-4");
      card.innerHTML = `
        <div class="card" >
            <img src="${book.img}" class="card-img-top" alt="Copertina del libro">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">Prezzo: ${book.price} €</p>
                <button class="btn btn-danger" onclick="removeCard(this)">Scarta</button>
            </div>
        </div>
    `;
      listaLibriContainer.appendChild(card);
    });
  }

  window.removeCard = function (button) {
    const card = button.closest(".card");
    card.remove();
  };
});
