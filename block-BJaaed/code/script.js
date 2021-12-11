
allBooks.books.forEach(function(book){
    let img = document.createElement("img");
    img.src =  book.image;
    img.alt = book.title;

    let imgDiv = document.createElement("div");
    imgDiv.append(img);
    imgDiv.className = "book-img";

    let h2 = document.createElement("h2");
    h2.innerText = book.title;
    h2.className = "book-heading";

    let h5 = document.createElement("h5");
    h5.innerText = "Author: "+book.author;
    h5.className = "book-author";

    let btn = document.createElement("a");
    btn.innerText = "Buy Now";
    btn.href = book.website
    btn.className = "btn";

    let div = document.createElement("div");
    div.className = "card flex-32 flex-dir-col align-center";
    div.append(imgDiv, h2, h5, btn);

    let allCards = document.getElementsByClassName("all_cards")[0];
    allCards.append(div)
})

let allCards = document.getElementsByClassName("all_cards")[0];
allCards.classList.add("flex-wrap");

