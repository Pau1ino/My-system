let btn = document.getElementById('btn');
let ul = document.getElementById("goalUl");

btn.addEventListener('click', function () {
    let input = document.getElementById('input').value;
  
    if(input.length > 0){
        let li = document.createElement("li");
        li.textContent = input;
        ul.appendChild(li);
        input.value = "";
    } else {alert("You need to input a goal first")};
})

let entry = document.getElementById("entry");
let journalCard = document.getElementById("journal-section");
let journalBody = document.getElementById("journal-body");
//We want to grab the input inside the event so it's not empty
entry.addEventListener("click", function(){
    let journalInput = document.getElementById("journal").value;
    let text = document.createElement("p");
    text.textContent = journalInput;

    journalBody.appendChild(text);
})

/* 
1. Once the button is clicked run an event that
2. Grabb the text
3. Create a p element and attatch the text to it
4. On the journal body, go ahead and add the inputted text
*/
