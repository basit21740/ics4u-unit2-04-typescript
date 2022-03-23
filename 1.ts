/*
 * This is Tower Of Hanoi Program
 * 
 * @author  Abdul Basit Butt
 * @version 1.0
 * @since   2022-02-19
 */

import promptSync from "prompt-sync"
const prompt = promptSync()

function hanoi (nOfDisks: number, startPeg: number,
  endPeg: number) {
  // this function solves the tower of hanoi.
  const pegNum: number = 6
  if (nOfDisks === 1) {
    console.log('Move disk 1 from peg ' + startPeg + ' to peg ' + endPeg)
  } else {
    hanoi(nOfDisks - 1, startPeg, pegNum - startPeg - endPeg)
    console.log('Move disk ' + nOfDisks + ' from peg ' +
                    startPeg + ' to peg ' + endPeg)
    hanoi(nOfDisks - 1, pegNum - startPeg - endPeg, endPeg)
  }
}

console.log('Tower of Hanoi.')

const input = prompt('\nHow many disks do you want?: ') 
  const diskNum: number = parseInt(input)
  if (Number.isInteger(diskNum)) {
    if (diskNum > 0) {
      hanoi(diskNum, 1, 3)
    } else {
      console.log('\nPlease insert a positive integer.')
    }
  } else {
    console.log('\nPlease input an integer.')
  }
  console.log('\nDone.')

  
