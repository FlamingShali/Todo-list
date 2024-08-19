const inputField = document.querySelector(".todo-input");
const addBtn = document.querySelector(".btn-add");
const list = document.querySelector(".posts-list");
const btnRemove = document.querySelector(".btn-remove");

const addPost = function () {
  if (inputField.value === "") {
    alert("There is no text to add. Write some of your thoughts");
  } else {
    let li = document.createElement("li");
    li.classList.add("posts-list__post");
    li.innerHTML = `
                <p>${inputField.value}</p>
                <button class="btn-remove">X</button>
    `;
    list.appendChild(li);
  }
  inputField.value = "";
  saveData();
};

addBtn.addEventListener("click", addPost);

list.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}

function showList() {
  list.innerHTML = localStorage.getItem("data");
}

showList()
