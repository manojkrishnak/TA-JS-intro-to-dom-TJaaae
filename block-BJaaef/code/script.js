
for(let i = 0; i<got.houses.length; i++){
    for(let j = 0; j < got.houses[i].people.length; j++){
        let imgDiv = document.createElement("div");
        imgDiv.className = "person-image";

        let img = document.createElement("img");
        img.src = got.houses[i].people[j].image;
        img.alt = got.houses[i].people[j].name;

        imgDiv.append(img);

        let h2 = document.createElement("h2");
        h2.innerText = got.houses[i].people[j].name;
        h2.className = "name"

        let divOne =  document.createElement("div");
        divOne.append(imgDiv, h2);
        divOne.className = "row-one flex justify-st align-ct";

        let p = document.createElement("p");
        p.innerText = got.houses[i].people[j].description;
        p.className = "description";

        let a = document.createElement("a");
        a.href = got.houses[i].people[j].wikiLink;
        a.innerText = "Learn More!";
        a.className = "learn-more-btn";
        a.setAttribute("target", "_blank");

        let div = document.createElement("div");
        div.append(divOne, p, a);
        div.className = "people-card flex flex-31 flex-dir-col relative";

        let allPeople = document.getElementsByClassName("all-people")[0];
        allPeople.classList.add("flex", "flex-wrap", "justify-sb");
        allPeople.append(div);
    }
}


// Approach - instructor

let parent = document.querySelector("all-people");

let allPeopleInstructor = got.houses.reduce((acc, cv) => {
    acc = acc.concat(cv.people);
    return acc;
}, [])

let cardsHtml = allPeopleInstructor.map(person => {
    return `return li elemnt with a sample dynamic structure in it`;
})

// parent.innerHTML = cardsHtml.join("");