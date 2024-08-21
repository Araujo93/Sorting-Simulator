async function partitionLomuto(ele, l, r){

 let i = l - 1;
 // color pivot element
 ele[r].style.background = '#fecf48';
 for(let j = l; j <= r - 1; j++){
     // color current element
     ele[j].style.background = '#92374D';
     // pauseChamp
     await promiseTimout(speed);

     if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){

        i++;
         swap(ele[i], ele[j]);
         // color 
         ele[i].style.background = '#6279B8';
         if(i != j) ele[j].style.background = '#6279B8';
         // pauseChamp
         await promiseTimout(speed);
     }
     else{
         // color if not less than pivot
         ele[j].style.background = "#6279B8";
     }
 }
 i++; 
 // pauseChamp
 await promiseTimout(speed);
 swap(ele[i], ele[r]); // pivot height one
 // color
 ele[r].style.background = '#6279B8';
 ele[i].style.background = '#73AB84';

 // pauseChamp
 await promiseTimout(speed);
 
 return i;
}

async function quickSort(ele, l, r){
 if(l < r){
     let pivot_index = await partitionLomuto(ele, l, r);
     await quickSort(ele, l, pivot_index - 1);
     await quickSort(ele, pivot_index + 1, r);
 }
 else{
     if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
         ele[r].style.background = '#73AB84';
         ele[l].style.background = '#73AB84';
     }
 }
}


const quickSortbtn = document.querySelector(".quick-btn");
quickSortbtn.addEventListener('click', async function(){
 let ele = document.querySelectorAll('.bar');
 let l = 0;
 let r = ele.length - 1;
 console.log(ele, 'ELE')
 disableSortingBtn();
 disableSizeSlider();
 disableNewArrayBtn();
 await quickSort(ele, l, r);
 enableSortingBtn();
 enableSizeSlider();
 enableNewArrayBtn();
});