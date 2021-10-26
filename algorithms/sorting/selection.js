

async function selectionSort () {
  let blocks = document.querySelectorAll('.bar')
   let prev;
    for(let i = 0; i < blocks.length-1; i++) {
        let min = i;
        for(let j = i+1; j< blocks.length; j++) {
          blocks[i].style.backgroundColor = '##ff006e';
            if(parseInt(blocks[j].childNodes[0].innerText) < parseInt(blocks[min].childNodes[0].innerText)) {
             if (prev) prev.style.backgroundColor = '#3a86ff' 
              prev = blocks[j]
               blocks[j].style.backgroundColor = '#ff006e'
                min = j
                await new Promise((resolve) =>
                setTimeout(() => {
                  resolve();
                }, speed)
              );
            }  
            else {
              blocks[j].style.backgroundColor = '#8338ec'
              await new Promise((resolve) =>
              setTimeout(() => {
                resolve();
              }, speed)
            );
            blocks[j].style.backgroundColor = '#3a86ff'

            } 
        }
        if(blocks[min].childNodes[0].innerText !== blocks[i].childNodes[0].innerText) {
        let temp1 = blocks[i].style.height;
        let temp2 = blocks[i].childNodes[0].innerText;
        blocks[i].style.backgroundColor = '#ffbe0b'
        blocks[min].style.backgroundColor = '#ffbe0b'
        blocks[i].childNodes[0].innerText = blocks[min].childNodes[0].innerText;
        blocks[i].style.height = blocks[min].style.height;
        blocks[min].style.height = temp1;
        blocks[min].childNodes[0].innerText = temp2;
        await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, speed)
      );
      blocks[min].style.backgroundColor = '#3a86ff'

        }

    }
    return
}
