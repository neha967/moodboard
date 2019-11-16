import '../styles/index.scss';

let images = document.getElementsByClassName("clickable");
let nextBtn = document.getElementById("next-btn");
let count = 0;

window.addEventListener("DOMContentLoaded", function(){
    nextBtn.addEventListener("click", showSelected);

    for(let i = 0; i < images.length; i++){
        images[i].addEventListener("click",  select);
    }
});

function select(e){

    let selected = e.target.nextElementSibling;
    
    $(selected).toggleClass("show");

    if($(selected).hasClass("show")){
        count++;
    } else {
        count--;
    }
}

function validateCount(){
    if(count > 4){
        alert("You can only select 4 items");
        return false;
    } else if(count < 4){
        alert("You must select 4 items");
        return false;
    } 
        return true;
}

function showSelected(){

    if(validateCount()){
        let pOfselectedDips = document.getElementsByClassName("show");

        let parentDiv = document.querySelector(".img-container");
        parentDiv.classList.add("new-style");
        parentDiv.classList.remove("img-container");

        let infoDivPTag = document.querySelector(".info p");
        infoDivPTag.innerHTML = "Voila - your moodboard! Time to add a tagline!";

        let infoDiv =  document.querySelector(".info");
        infoDiv.classList.add("new-class");

        let containerDiv = document.createElement("div");

        $(nextBtn).hide();

        for(let i = 0; i < pOfselectedDips.length; i++){
            
            let imgSrc = pOfselectedDips[i].parentNode.querySelector(".clickable").getAttribute("src");
            
            let pinnedImgSrc = "../../public/images/img_control_pushpin.png";
                
            containerDiv.innerHTML += `
            <div class="d-flex flex-column justify-content-center align-items-center">
                <img src='${pinnedImgSrc}' class="pinned">
                <img src='${imgSrc}' class="selected-img">
            </div>
            `;
        }

            containerDiv.innerHTML += `
            <div class="d-flex flex-column justify-content-center align-items-center">
                <textarea class="p-2 m-2" cols="30">Type here..</textarea>
                <button class="next-btn">next</button>
            </div>
            `;

        parentDiv.innerHTML = containerDiv.innerHTML;
    };
}
