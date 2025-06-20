const input = document.querySelector("#input");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const alldel = document.querySelector("#alldelete");

btn.addEventListener("click", () => {
  let task = input.value.trim();
  if (task === "") {
    alert("Please enter a task 📝");
    return;
  }

  const li = document.createElement("li");
  li.innerText = task;

  li.addEventListener("click", () => {
    if (li.style.textDecoration === "line-through") {
      li.style.textDecoration = "none";
      li.style.color = "";
    } else {
      li.style.textDecoration = "line-through";
      li.style.color = "gray";
    }
  });

  const delbtn = document.createElement("button");
  delbtn.innerText = "❌";
  delbtn.style.marginLeft = "10px";

  delbtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(delbtn);
  ul.appendChild(li);
  input.value = "";
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btn.click();
  }
});

alldel.addEventListener("click", () => {
  ul.innerHTML = "";
});
