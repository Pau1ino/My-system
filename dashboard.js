let btn = document.getElementById('btn');
let ul = document.getElementById("goalUl");
let entry = document.getElementById("entry");
let journalBody = document.getElementById("journal-body");


btn.addEventListener('click', function () {
    let input = document.getElementById('input').value;

    if (input.length > 0) {
        let li = document.createElement("li");
        li.textContent = input;
        ul.appendChild(li);
        document.getElementById("input").value = "";
    } else { alert("You need to input a goal first") };
})

//We want to grab the input inside the event so it's not empty
entry.addEventListener("click", function () {
    let journalInput = document.getElementById("journal").value; //Journal Input Value
    let journalTitle = document.getElementById("journalT").value;  //Journal title

    if (journalInput.length && journalTitle.length > 0) {
        //Journal Content
        let p = document.createElement("p");
        p.textContent = journalInput;  //Create Paragraph and add the jounral input to it

        //Journal Title
        let h3 = document.createElement("h3");
        h3.textContent = journalTitle;

        //Div to append to parent
        let card = document.createElement("div");
        card.appendChild(h3);
        card.appendChild(p);

        //Append card to the parent
        journalBody.appendChild(card);

        //Now lets clean up the inputs
        document.getElementById("journal").value = "";
        document.getElementById("journalT").value = "";
    } else { alert("You need to have a title and some content before inputting") };

})
