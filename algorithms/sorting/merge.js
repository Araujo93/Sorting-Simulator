

function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let results = [];
    while(i < arr1.length && j < arr2.length) {
     if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;  
     }else {
      results.push(arr2[j])
     }
    }
    while(i < arr1.length){
     results.push(arr1[i]);
     i++;
    }
    while(j < arr2.length){
     results.push(arr2[j]);
     j++;
    }
    return results
   }
   let arr = document.querySelectorAll('.bar')

//    let bars = document.querySelector('.main1');
   function mergeSort(arr){

    if (arr.length <= 1) return arr;
    
    let mid = Math.floor(arr.length/2);
    let left = mergeSort([].slice.call(arr, 0, mid));
    let right = mergeSort([].slice.call(arr, mid));
     return merge(left, right);
   }

mergeSort(arr)