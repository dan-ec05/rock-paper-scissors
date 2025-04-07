const modal = document.getElementById("modal");

const btn = document.getElementById("btn-rules");
const btnClose = document.getElementById("the-x-close");
const btnCloseF = document.getElementById("the-x-close-f");

btn.addEventListener("click", () => {
    modal.style.display = "flex";
});

btnClose.addEventListener("click", () => {
    modal.style.display = "none";
});

btnCloseF.addEventListener("click", () => {
    modal.style.display = "none";
});