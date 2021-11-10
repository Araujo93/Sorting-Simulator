let bars = document.querySelector('.main1');
let header = document.querySelector('.top-header')
let button = document.querySelector('.btn')
let newBtn = document.querySelector('.new-btn')
let bubble = document.querySelector('.bubble-btn')
let selection = document.querySelector('.selection-btn')
let mergeBtn = document.querySelector('.merge-btn')
let range = document.querySelector('#range')
let speedRange = document.querySelector('#speed')
let pressed = false

let speed = 50
let array = []
function resetArray(num = 30) {
   array = []
   for(let i=0; i < num; i++) {
      array.push(randomIntFromInterval(1,400));
   }
   return array;
}


function createBars(num) {
   // resetArray(num)
   bars.innerHTML = '';
   array.map((elem, ind) => {
      let div = document.createElement('div');
   div.classList.add('bar');
   div.style.transform = `translateX(${ind}px)`;
   div.style.height = parseInt(elem + 5) + 'px'
   const label = document.createElement('label');
   label.classList.add('block_id');
   label.innerHTML = `${elem}`
   div.appendChild(label)
   bars.appendChild(div)

})
}
// Reset button. MergeSort takes an auxillary relay so a boolean was used to stop the animations
newBtn.addEventListener('click', () => {
    pressed = true
   let arr = document.querySelectorAll('.bar')
   resetArray(arr.length)
   range.value = 30
   return createBars()
})
bubble.addEventListener('click', () => {
   let arr = document.querySelectorAll('.bar')
   bubbleSort(arr)
})
selection.addEventListener('click', () => {
   let arr = document.querySelectorAll('.bar')
   selectionSort(arr)
})
mergeBtn.addEventListener('click', () => {
   let arr = document.querySelectorAll('.bar')
   mergeSort(arr, 0, arr.length - 1)
})
range.addEventListener('change', () => {
   let value = range.value;
      resetArray(value) 
      createBars()
})
speedRange.addEventListener('change', () => {
   let value = speedRange.value;
   speed = value
})

// function to generate random number between min and max;
function randomIntFromInterval(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

resetArray()
createBars()

