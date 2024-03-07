let goalInput = document.getElementById("goal-input").textContent;
let btn = document.getElementById("btn");
let dGoalCardUl = document.getElementById("dGoalCardUl");

btn.addEventListener("click", ()=>{
	let node = document.createElement("li");
  dGoalCardUl.appendChild(node);
});
