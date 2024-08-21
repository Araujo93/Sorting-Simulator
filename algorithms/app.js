let newBtn = document.querySelector('.new-btn')
let range = document.querySelector('#range')
let speedRange = document.querySelector('#speed')
let speed = 320
let array = []


function swap(el1,  el2) {
   
   let temp1 = el1.style.height;
   let temp2 = el1.childNodes[0].innerText
   
   el1.style.height = el2.style.height;
   el1.childNodes[0].innerText = el2.childNodes[0].innerText
  
   el2.style.height = temp1;
   el2.childNodes[0].innerText = temp2
   
  }
  
  
  // Disables sorting buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
  function disableSortingBtn(){
   document.querySelector(".bubble-btn").disabled = true;
   document.querySelector(".insertion-btn").disabled = true;
   document.querySelector(".merge-btn").disabled = true;
   document.querySelector(".quick-btn").disabled = true;
   document.querySelector(".selection-btn").disabled = true;
  }
  
  // Enables sorting buttons used in conjunction with disable
  function enableSortingBtn(){
   document.querySelector(".bubble-btn").disabled = false;
   document.querySelector(".insertion-btn").disabled = false;
   document.querySelector(".merge-btn").disabled = false;
   document.querySelector(".quick-btn").disabled = false;
   document.querySelector(".selection-btn").disabled = false;
  }
  
  // Disables size slider used in conjunction with enable, so that we can disable during sorting and enable buttons after it
  function disableSizeSlider(){
   document.querySelector("#range").disabled = true;
  }
  
  // Enables size slider used in conjunction with disable
  function enableSizeSlider(){
   document.querySelector("#range").disabled = false;
  }
  
  // Disables newArray buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
  function disableNewArrayBtn(){
   document.querySelector(".new-btn").disabled = true;
  }
  
  // Enables newArray buttons used in conjunction with disable
  function enableNewArrayBtn(){
   document.querySelector(".new-btn").disabled = false;
  }
  
  
  // Used in async function so that we can so animations of sorting, takes input time in ms (1000 = 1s)
  function promiseTimout(milisec) { 
   return new Promise(resolve => { 
       setTimeout(() => { resolve('') }, milisec); 
   }) 
  }

// Helper function to delete all the previous bars so that new can be added
function deleteChild() {
   const bar = document.querySelector(".main1");
   bar.innerHTML = '';
}
createBars()
function createBars(num = 30) {
   // calling helper function to delete old bars from dom
   deleteChild()
   array = [];
   for(let i=0; i < num; i++) {
      array.push(randomIntFromInterval(1,400));
   }
   const bars = document.querySelector(".main1");


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
   functionRunning = true
   
   let value = range.value;
   return createBars(value)
})

// size
range.addEventListener('change', () => {
   let value = range.value;
      createBars(value)
})


speedRange.addEventListener('input', function(){
   speed = 320 - parseInt(speedRange.value);
});

// function to generate random number between min and max;
function randomIntFromInterval(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}



