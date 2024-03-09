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
