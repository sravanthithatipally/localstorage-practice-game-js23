let savebtnele = document.getElementById("saveBtn");
let clearbtnele = document.getElementById("clearBtn");
let textele = document.getElementById("msg");

savebtnele.onclick = function() {
    let userele = textele.value;
    localStorage.setItem("userInput", userele);
};
clearbtnele.onclick = function() {
    textele.value = "";
    localStorage.removeItem("userInput");
};