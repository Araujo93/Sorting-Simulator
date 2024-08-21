async function insertion(){

 const ele = document.querySelectorAll(".bar");
 // color
 ele[0].style.background = '#73AB84'; // green

 for(let i = 1; i < ele.length; i++){
     let j = i - 1;
     let key = ele[i].style.height;
     let key2 = ele[i].childNodes[0].innerText
     // color
     ele[i].style.background = '#92374D'; // magenta

     await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, speed)
    )

     while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
         // color
         ele[j].style.background = '#92374D'; // magenta
         ele[j + 1].style.height = ele[j].style.height;
         ele[j + 1].childNodes[0].innerText = ele[j].childNodes[0].innerText;
         j--;

         await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, speed)
        )

         // color
         for(let k = i; k >= 0; k--){
             ele[k].style.background = '#73AB84'; //green
         }
     }
     ele[j + 1].style.height = key;
     ele[j + 1].childNodes[0].innerText = key2;
     // color
     ele[i].style.background = '#73AB84'; // green
 }
}

const inSortbtn = document.querySelector(".insertion-btn");
inSortbtn.addEventListener('click', async function(){
 disableSortingBtn();
 disableSizeSlider();
 disableNewArrayBtn();
 await insertion();
 enableSortingBtn();
 enableSizeSlider();
 enableNewArrayBtn();
});