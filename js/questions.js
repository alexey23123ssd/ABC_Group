/*const nextBtn = document.querySelector(".question-cont__question-btn")

nextBtn.addEventListener("click",()=>{
let progress = document.querySelector(".question-cont__progress-fill")
let metrics = progress.getBoundingClientRect()
progress.style.width = (((metrics.width+26)/260)*100)+"%"
})

const btn = document.querySelector(".section-welcome__button")

btn.addEventListener("click",()=>{
document.body.firstElementChild.nextElementSibling.style.display = "none"
document.body.firstElementChild.nextElementSibling.nextElementSibling.style.display = "none"
document.querySelector(".question-cont").style.display="block"
})*/

document.addEventListener("DOMContentLoaded",function(){
    const questions = [
   {
     id:1,
     question:"Ваш пол",
     options:["Мужчина","Женщина"],
     type:"text"
   },
   {
     id:2,
     question:"Укажите ваш возраст",
     options:["До 18","От 18 до 28","От 29 до 35","От 36"],
     type:"text"
   },
   {
     id:3,
     question:"Выберите лишнее",
     options:["Дом","Шалаш","Бунгало","Скамейка","Хижина"],
     type:"text"
   }, 
    {
     id:4,
     question:"Продолжите числовой ряд:18 20 24 32",
     options:["62","48","74","57","60","77"],
     type:"text"
   },
   {
    id:5,
    question:"Выберите цвет,который сейчас наиболее вам приятен",
    options:["#A8A8A8","#0000A9","#00A701","#F60100","#FDFF19","#A95403","#000000","#850068","#46B2AC"],
    type:"figure" 
   },
   {
    id:6,
    question:"Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:",
    options:["#A8A8A8","#46B2AC","#A95403","#00A701","#000000","#F60100","#850068","#FDFF19","#0000A9"],
    type:"figure" 
   },
   {
    id:7,
    question:"Какой из городов лишний?",
    options:["Вашингтон","Лондон","Париж","Нью-Йорк","Москва","Оттава"],
    type:"text" 
   },
   {
    id:8,
    question:"Выберите правильную фигуру из четырех пронумерованных",
    source:"/img/questionSrc.png",
    options:["1","2","3","4"],
    type:"gallery"
  },
  {
    id:9,
    question:"Вам привычнее и важнее:",
    options:["Наслаждаться каждой минутой проведенного времени","Быть устремленными мыслями в будущее","Учитывать в ежедневной практике прошлый опыт"],
    type:"text" 
   },
  {
    id:10,
    question:"Какое определение, по вашему, больше подходит данному геометрическому изображению",
    source:"/img/triangleSrc.png",
    options:["Оно остроконечное","Оно устойчиво","Оно находится в состоянии равновесия"],
    type:"img"
  },
  {
    id:11,
    question:"Вставьте подходящее число",
    source:"/img/starSrc.png",
    options:["34","36","53","44","66","42"],
    type:"gallery"
  }
  ] 
    
  
  let currentIndex = 0;
   document.addEventListener("click",(event)=>{
    if(event.target.closest(".button")){
    document.querySelector(".header").style.display="none"
  document.querySelector(".main").style.display="none"
  document.querySelector(".question-cont").style.display="block"
   
  loadQuestion(currentIndex,questions)
   }
  else if(event.target.closest(".question-cont__question-btn")){
    let selected = document.querySelector(".question-cont__question-options[data-selected]")
  if(selected!=null){
  currentIndex++
  loadQuestion(currentIndex,questions,showResults)
  
    
  let progress = document.querySelector(".question-cont__progress-fill")
  let progressCont = document.querySelector(".question-cont__progress")

  let numbersOfQuestions = questions.length
  let piece = Number(progressCont.offsetWidth/numbersOfQuestions)
  
  progress.style.width = (progress.offsetWidth + piece) + "px"
  }
  else{
  alert("Выберите один из вариантов")
  }
   }
   })
  })
  
  function loadQuestion(index,questions,showResults){
    const questionContainer = document.querySelector(".question-cont__question")
  if(index>=questions.length){
     showResults(timer)
    return;
    }
  const question = questions[index]
  if(question.type === "text"){
    const questionHTML = `
    <div class="question-cont__question" data-id=${question.id} data-type=${question.type}>
      <p class="question-cont__question-text">${question.question}
      </p>
      <div class="question-cont__question-options">
        ${question.options.map(option=> `<div class="question-cont__question-option">
      <input type="radio" name="question-${question.id}"
    id="option-${question.id}" value="${option}">
       <label for="option-${question.id}">
        ${option}
       </label>
       </div>`).join("")}
      </div>
    </div>
    `
    questionContainer.innerHTML = questionHTML
  }
  else if(question.type === "figure"){
    const questionHTML = `
    <div class="question-cont__question" data-id=${question.id} data-type=${question.type}>
    <p class="question-cont__question-text">${question.question}
    </p>
    <div class="cont question-cont__question-options">
        ${question.options.map(option=> `<div class="figure question-cont__question-option"
    style="background-color:${option}">
        </div>`).join("")}
      </div>
    </div>
    `
    questionContainer.innerHTML = questionHTML
  }
  else if(question.type === "gallery"){
      const questionHTML = `
    <div class="question-cont__question" data-id=${question.id} data-type=${question.type}>
      <p class="question-cont__question-text">${question.question}
      </p>
      <div class"question-cont__question-img>
        <img src="${question.source}"
      </div>
      <div class="gallery question-cont__question-options">
        ${question.options.map(option=> `<div class="variant question-cont__question-option">${option}</div>`).join("")}
      </div>
    </div>
    `
    questionContainer.innerHTML = questionHTML
  }
  else if(question.type === "img"){
    const questionHTML = `
    <div class="question-cont__question" data-id=${question.id} data-type=${question.type}>
      <p class="question-cont__question-text">${question.question}
      </p>
      <div class"question-cont__question-imgg>
        <img src="${question.source}"
      </div>
      <div class="question-cont__question-options">
        ${question.options.map(option=> `<div class="question-cont__question-option">
          <input type="radio" name="question-${question.id}"
        id="option-${question.id}" value="${option}">
          <label for="option-${question.id}">
            ${option}
          </label>
          </div>`).join("")}
      </div>
    </div>
    `
    questionContainer.innerHTML = questionHTML
  }
}

  

   document.addEventListener("click",(event)=>{
    if(event.target.closest(".question-cont__question-option")){
      const optionsCont = document.querySelector(".question-cont__question-options")
      optionsCont.setAttribute("data-selected","")

      const options = document.querySelectorAll(".question-cont__question-option")
      for(let option of options){
        option.style.border = "none"
      }
      event.target.closest(".question-cont__question-option").style.border = "3px solid #FFC700"
 }
 })

 function showResults(timer){
  const questionContainer = document.querySelector(".question-cont__question")
  const btn = document.querySelector(".question-cont__question-btn")
  btn.remove()

  const questionHTML = `<h3 class=question-cont__result-title>Обработка результатов</h3> 
  <div class=question-cont__result-loader>
  <div class="loading-dot"></div> 
    <div class="loading-dot"></div>
    <div class="loading-dot"></div>
    <div class="loading-dot"></div>
    <div class="loading-dot"></div> 
    <div class="loading-dot"></div> 
    <div class="loading-dot"></div> 
    <div class="loading-dot"></div> 
    <div class="loading-dot"></div> 
    <div class="loading-dot"></div> 
    <div class="loading-dot"></div>
  </div>  
  <p class=question-cont__result-text>Определение стиля мышления.................</p>`

  questionContainer.innerHTML = questionHTML

  setTimeout(()=>{
    const questionHTML = `<h3 class=question-cont__result-title>Ваш результат рассчитан</h3>
    <p class=question-cont__result-info>
     <span class=question-cont__tesult-text_underlined>Вы относитесь к 3%</span>
     респондентов,чей уровень интеллекта более чем на 15 пунктов отличается от среднего в большую или меньшую сторону.
    </p>
    <h3 class=question-cont__result-title_green>
     Скорее получите свой результат.
    </h3>
    <div class=question-cont__result-alert>
     <p class=question-cont__result-appeal>
      В целях защиты персональных данных результаты теста, их интерпритация и рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона.
     </p>
    </div>
    <p class=question-cont__result-text_green>
    Звоните скорее,запись доступна всего <span id=timer class=question-cont__result-text_big>10:00</span> минут!
    </p>
    <button class=question-cont__result-btn>
     <img src="/img/call.png">
     Позвонить и прослушать результат
    </button>
    `
   const headingText = document.querySelector(".question-cont__title")
    headingText.textContent = "ГОТОВО!"
   
   const container = document.querySelector(".question-cont__main-container")
    container.innerHTML = questionHTML
   }
  ,5000)

  setTimeout(()=>{
    const time = document.getElementById("timer")
    timer(time)
 },5001)
}

function timer(time) { 
  let minutes = 10; 
  let seconds = 0; 
 
 let countdownInterval; 
  
  function formatTime(time) {
    return time < 10 ? '0' + time : time; 
  } 
  
  function updateTimerDisplay() { 
    time.textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
  } 
  
  function startCountdown() { 
countdownInterval = setInterval(function() { 
  if (seconds > 0) 
  { 
    seconds--; 
 } 
  else 
  { 
    if (minutes > 0) 
    { 
      minutes--; 
      seconds = 59; 
    } 
    else 
    { 
    document.querySelector(".question-cont__result-btn").setAttribute("disabled", true)
    clearInterval(countdownInterval);               
    return; 
 } 
} 
 updateTimerDisplay(); 
}
 ,1000);   
} 
  
  updateTimerDisplay(); 
  startCountdown(); 
}


function getData(){
  return fetch("https://swapi.dev/api/people/1/")
  .then((response) => {
  return response.json()
   })
  .then((data) => {
    return data
  })
  .catch((error) => {
  alert(error)
  })
}

document.addEventListener("click",async (event)=>{
  if(event.target.closest(".question-cont__result-btn")){
    const container = document.querySelector(".question-cont__main-container")
      const infoContainer = document.createElement("div")
      infoContainer.classList.add("question-cont__result-about")
      infoContainer.textContent = "Информация о вас"
      let result = await getData()
      
      for(let prop in result){
     let info = document.createElement("div")
     info.classList.add("question-cont__result-info")
     info.textContent = `${prop}:${result[prop]}`
     
     infoContainer.append(info)
    }
    container.append(infoContainer)
   }
  })