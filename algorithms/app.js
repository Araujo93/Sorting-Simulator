let bars = document.querySelector('.main1');
let header = document.querySelector('.top-header')
let button = document.querySelector('.btn')
let newBtn = document.querySelector('.new-btn')
let bubble = document.querySelector('.bubble-btn')
let selection = document.querySelector('.selection-btn')
let range = document.querySelector('#range')
let speedRange = document.querySelector('#speed')
// let s = document.querySelector('.btn')


let speed = 500
let array = []
function resetArray(num = 30) {
   array = []
   for(let i=0; i < num; i++) {
      array.push(randomIntFromInterval(1,400));
   }
   return array;
}


function createBars() {
   bars.innerHTML = '';
   array.map((elem, ind) => {
   let div = document.createElement('div');
   div.classList.add('bar');
   div.style.transform = `translateX(${ind * 22}px)`;
   div.style.height = parseInt(elem + 5) + 'px'
   const label = document.createElement('label');
   label.classList.add('block_id');
   label.innerHTML = `${elem}`
   div.appendChild(label)
   bars.appendChild(div)

})
}

newBtn.addEventListener('click', () => {
   let s = resetArray()
   range.value = 30
   return createBars(s)
})
bubble.addEventListener('click', () => {
   let arr = document.querySelectorAll('.bar')
   bubbleSort(arr)
})
selection.addEventListener('click', () => {
   let arr = document.querySelectorAll('.bar')
   selectionSort(arr)
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

function randomIntFromInterval(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

resetArray()
createBars()

