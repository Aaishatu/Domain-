const myremovedlist = document.getElementsByTagName("LI");

for (let i = 0; i < myremovedlist.length; i++) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("Remove");
  span.className = "removeBtn";
  span.appendChild(txt);
  myremovedlist[i].appendChild(span);
}

const removeBtn = document.getElementsByClassName("removeBtn");

for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].onclick = function() {
        const div = this.parentElement;
        div.style.display = "none";
    }
}

const list = document.querySelector("ul");

list.addEventListener("click", function(ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
    }
}, false);

function addElement() {
  const li = document.createElement("li");
  const userfeedback = document.getElementById("userfeedback").value;
  const newinput = document.createTextNode(userfeedback);

  li.appendChild(newinput);

  if (userfeedback === "") {
      alert("You should write something!");
  } else {
      document.getElementById("myactivities").appendChild(li);
  }

}

document.getElementById("userfeedback").value = "";

const span = document.createElement("SPAN");
const txt = document.createTextNode("Remove");
span.className= "removeBtn";
span.appendChild(txt);
li.appendChild(span);

for (let i = 0; i < removeBtn.length; i++) {
  removeBtn[i].onclick = function() {
      const div = this.parentElement;
      div.style.display = "none";
  }
}




