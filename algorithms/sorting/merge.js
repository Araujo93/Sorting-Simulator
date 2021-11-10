
async function mergeSort () {

  const animations = getMergeSortAnimations(array);
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.querySelectorAll('.bar')
    if(pressed) return

     const isColorChange = i % 3 !== 2;

     if (isColorChange) {
       
       const [barOneIdx, barTwoIdx] = animations[i];
       const barOneStyle = arrayBars[barOneIdx].style;
       const barTwoStyle = arrayBars[barTwoIdx].style;
      
       const color = i % 3 === 0 ? 'red' : 'green';
      
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
          await new Promise((resolve) => {
            setTimeout(() => {
         resolve()
         }, speed)
       });
     } else {
       const [barOneIdx, newHeight] = animations[i];
       const barOneStyle = arrayBars[barOneIdx].style;
 
          barOneStyle.height = `${newHeight}px`;
          arrayBars[barOneIdx].childNodes[0].innerText = newHeight
          await new Promise((resolve) => {
            setTimeout(() => {
          resolve()
        }, speed)
       
       });
      }
      await new Promise((resolve) => {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          arrayBars[barOneIdx].style.backgroundColor = 'yellow'
          resolve()
      }, speed);
    })
     
    
  }
 
 }


  
function getMergeSortAnimations(array) {

    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
 
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);


 }
 
 function doMerge(
   mainArray,
   startIdx,
   middleIdx,
   endIdx,
   auxiliaryArray,
   animations,
 ) {
   let k = startIdx;
   let i = startIdx;
   let j = middleIdx + 1;
   while (i <= middleIdx && j <= endIdx) {
 
     animations.push([i, j]);

     animations.push([i, j]);
  

     if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      
       animations.push([k, auxiliaryArray[i]]);
       mainArray[k++] = auxiliaryArray[i++];

     } else {
  
       animations.push([k, auxiliaryArray[j]]);
       mainArray[k++] = auxiliaryArray[j++];

     }
   }
   while (i <= middleIdx) {
   
     animations.push([i, i]);

     animations.push([i, i]);

     animations.push([k, auxiliaryArray[i]]);
     mainArray[k++] = auxiliaryArray[i++];

   }
   while (j <= endIdx) {
  
     animations.push([j, j]);
   
     animations.push([j, j]);
  
     animations.push([k, auxiliaryArray[j]]);
     mainArray[k++] = auxiliaryArray[j++];

   }
 }

