async function selectionSort () {

  let blocks = document.querySelectorAll('.bar')

   let prev;

    for(let i = 0; i < blocks.length-1; i++) {

        let min = i;

        // Change color of the position to swap with the next min
        blocks[i].style.backgroundColor = '#92374D'; // magenta 

        for(let j = i+1; j< blocks.length; j++) {
          // Change color for the current comparision (in consideration for min_index)
          blocks[j].style.backgroundColor = '#92374D'; // magenta 

            if(parseInt(blocks[j].childNodes[0].innerText) < parseInt(blocks[min].childNodes[0].innerText)) {

             if (prev) { 
              prev.style.backgroundColor = '#6279B8' // BLUE
              blocks[j].style.backgroundColor = '#92374D' // magenta 

            } 
            
              prev = blocks[j]
              min = j
                
                await promiseTimout(speed)

            } else {
              blocks[j].style.backgroundColor = '#fecf48'  // yellow
              await promiseTimout(speed)
              blocks[j].style.backgroundColor = '#6279B8' // BLUE


            } 
        }
        
        if(min !== i) {

          await promiseTimout(speed)

        swap(blocks[min], blocks[i])
        
      
      blocks[min].style.backgroundColor = '#73AB84' // green 
    }

      blocks[i].style.background = '#73AB84'; // green 

  }

  for (let i =0; i < blocks.length; i++) {
    blocks[i].style.background = '#73AB84'; // green 

  }
 
    return
}

const selectionBtnSort = document.querySelector(".selection-btn");
selectionBtnSort.addEventListener('click', async function(){
 disableSortingBtn();
 disableSizeSlider();
 disableNewArrayBtn();
 await selectionSort();
 enableSortingBtn();
 enableSizeSlider();
 enableNewArrayBtn();
});