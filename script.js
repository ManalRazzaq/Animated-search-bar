
const searchElem = document.querySelector('.search');
const containerEl = document.querySelector('.search-bar-container');
searchElem.addEventListener('click' , ()=>{
    containerEl.classList.toggle('active');
});