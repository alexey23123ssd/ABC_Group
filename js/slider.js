const burgerBtn = document.querySelector(".header__img-burg")
.addEventListener('click',()=>{
    const slider = document.querySelector(".header__slider")
    slider.style.left = 0 + "%"

    slider.addEventListener('click',(event)=>{
        if(event.target.matches(".header__cross-icon")){
            slider.style.left = -100 + "%"
        }
    })
})