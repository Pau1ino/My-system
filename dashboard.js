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

let journalBody = document.getElementById("journal-body");

//We want to grab the input inside the event so it's not empty
let card = document.createElement("div");

entry.addEventListener("click", function(){
    let journalInput = document.getElementById("journal").value; //J input


    // let text = document.createElement("p");//Create p


    // text.textContent = journalInput; //p = Journal input
    let journalT = document.getElementById("journalT").value;  //Journal title

    let entro = document.createElement("p");
    
    let entroid = journalT + journalInput;

        console.log(journalT);

    entro.textContent += entroid;

    

    //Make card
    let card = document.createElement("div");
    card.appendChild(entro);
    // card.appendChild(text);

    // //Append card
    journalBody.appendChild(card);
})

/* 
1. Once the button is clicked run an event that
2. Grabb the text
3. Create a p element and attatch the text to it
4. On the journal body, go ahead and add the inputted text
*/



/* 
<div>
    <div>
        <div>
        <div>
    <div>
<duv>

*/
