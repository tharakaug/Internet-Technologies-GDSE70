console.log("event handing");

const saveBtn = document.getElementById("btnSave");
saveBtn.addEventListener("click", handleClick);

function handleClick() {
    alert("save button is clicked");
}

// saveBtn.removeEventListener("click", handleClick)