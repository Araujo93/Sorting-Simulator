async function bubbleSort () {



    // compare adjacent values and swap larger value to the end of the array
    // continue n-1 times
    let blocks = document.querySelectorAll('.bar')

    let len = blocks.length;

    for(let i = 0; i < len-1; i++) {

        for(let j = 0; j < len-i-1; j++) {
          
            // select adjacent blocks and color them purple  
            blocks[j].style.backgroundColor = '#92374D' // magenta
            blocks[j+1].style.backgroundColor = '#92374D' // magenta


            await promiseTimout(speed)

            let firstBlockNum = parseInt(blocks[j].childNodes[0].innerText) 
            let secondBlockNum = parseInt(blocks[j+1].childNodes[0].innerText)

            if(firstBlockNum > secondBlockNum) {
            
                swap(blocks[j], blocks[j+1]);
                await promiseTimout(speed)
           
            }
            blocks[j].style.backgroundColor = '#6279B8' // blue
            
          }
           // set last block to sorted color (yellow) as its now sorted
          blocks[blocks.length-1-i].style.backgroundColor = '#73AB84' // green 
          
        }
        // set first block so sorted color at end of loop as all is sorted
        blocks[0].style.backgroundColor = '#73AB84' // green 
    
 }

 const bubSortbtn = document.querySelector(".bubble-btn");
 bubSortbtn.addEventListener('click', async function(){
     disableSortingBtn();
     disableSizeSlider();
     disableNewArrayBtn();
     await bubbleSort();
     enableSortingBtn();
     enableSizeSlider();
     enableNewArrayBtn();
 });