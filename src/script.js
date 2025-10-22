let playerName = null;

const nameItems = {
    setNameMenu: document.querySelector("#setNameMenu"),
    setPlayerNameBtn: document.querySelector('#setNameMenu .saveBtn'),
    cancelPlayerNameBtn: document.querySelector('#setNameMenu .cancelBtn'),
    playerNameSpan: document.querySelector('#welcomeText span'),
    changeNameBtn: document.querySelector('#nameChangeBtn'),
    errorMsgBox: document.querySelector('#setNameMenu .errorMsg')
};

// If there is a saved name use that else give name menu
const savedName = localStorage.getItem('playerName');
if (savedName) {
    playerName = savedName;
    nameItems.playerNameSpan.textContent = `${playerName}, `;
} else {
    showSetNameMenu();
}

//save name, close menu, open menu
nameItems.setPlayerNameBtn.addEventListener('click', setPlayerName);
nameItems.cancelPlayerNameBtn.addEventListener('click', closeSetNameMenu);
nameItems.changeNameBtn.addEventListener('click', showSetNameMenu);

function setPlayerName() {
    const nameInputField = nameItems.setNameMenu.querySelector("input");
    let tempName = nameInputField.value.trim();
    if (!tempName) {
        nameItems.errorMsgBox.textContent = "Fill name please";
        return;
    } else if (4 > tempName.length || tempName.length > 14) {
        nameItems.errorMsgBox.textContent = "Name must be betweeen 4 and 14 characters long"
        return;
    }

    nameItems.errorMsgBox.textContent = ""

    playerName = tempName

    nameItems.playerNameSpan.textContent = `${playerName}, `;
    localStorage.setItem('playerName', playerName);
    nameItems.setNameMenu.style.display = "none";
}


function closeSetNameMenu() {
    nameItems.setNameMenu.classList.remove("show");
    setTimeout(() => {
        if (!nameItems.setNameMenu.classList.contains("show")) {
            nameItems.setNameMenu.style.display = "none";
        }
    }, 300);
}

function showSetNameMenu() {
    nameItems.setNameMenu.style.display = "flex";
    setTimeout(() => {
        nameItems.setNameMenu.classList.add("show");
    }, 10);
}
