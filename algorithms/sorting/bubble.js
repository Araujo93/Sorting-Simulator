async function bubbleSort () {
    //compare adjacent values and swap larger value to the end of the array
    // continue n-1 times
    let blocks = document.querySelectorAll('.bar')
    let len = blocks.length;
    for(let i = 0; i < len-1; i++) {
        for(let j = 0; j < len-i-1; j++) {
            blocks[j].style.backgroundColor = '#8338ec'
            blocks[j+1].style.backgroundColor = '#8338ec'
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve()
                },speed)
            })
              let value1 = parseInt(blocks[j].childNodes[0].innerText)  // 5, 3, 2 , 6
              let value2 = parseInt(blocks[j+1].childNodes[0].innerText)
            if(value1 > value2) {
                let temp1 = blocks[j+1].style.height;
                let temp2 = blocks[j+1].childNodes[0].innerText;
                blocks[j].style.backgroundColor = '#ff006e'
                blocks[j+1].style.backgroundColor = '#ff006e'
                blocks[j+1].style.height = blocks[j].style.height;
                blocks[j+1].childNodes[0].innerText = blocks[j].childNodes[0].innerText;
                blocks[j].style.height = temp1;
                blocks[j].childNodes[0].innerText = temp2;
                

                await new Promise((resolve) =>
                setTimeout(() => {
                  resolve();
                }, speed)
              );
            }
            blocks[j].style.backgroundColor = '#3a86ff'
            blocks[j+1].style.backgroundColor = '#3a86ff'
            
          }
          blocks[blocks.length-1-i].style.backgroundColor = '#ffbe0b'
    }
    blocks[0].style.backgroundColor = '#ffbe0b'
        
        return
 }


// bubbleSort(array)