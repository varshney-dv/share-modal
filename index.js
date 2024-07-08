const modal=document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const card=document.querySelector(".card");
const openmodal=()=>{
    console.log("modal is open ");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
    card.classList.add("blur")
}
const closemodal=()=>{
    console.log("modal is close ");
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
    card.classList.remove("blur");
}
