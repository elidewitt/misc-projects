async function bubbleSort(arr) {

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      let a = await arr[j];
      let b = await arr[j + 1];
      if (a > b) {
        await swap(arr, j, j + 1);
      }
    }
  }
}

async function swap(arr, a, b) {
  await sleep(0);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}