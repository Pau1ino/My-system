let btn = document.getElementById('btn');
let input = document.getElementById('input');
let ul = document.getElementById("goalUl");

btn.addEventListener('click', function () {
    if(input.value.length > 0){
        let li = document.createElement("li");
        li.textContent = input.value;
        ul.appendChild(li);
        input.value = "";
    } else {alert("You need to input a goal first")};
})
