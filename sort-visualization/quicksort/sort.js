async function swap(arr, a, b) {
  await sleep(0);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

async function quickSort(arr, start, end) {
  if (start >= end) return;

  let index = await partition(arr, start, end);
  states[index] = -1;

  await Promise.all([
    await quickSort(arr, start, index - 1),
    await quickSort(arr, index + 1, end)
  ]);
}

async function partition(arr, start, end) {

  for (let i = start; i < end; i++) {
    states[i] = 1;
  }

  let pivotIndex = start;
  let pivotValue = arr[end];
  states[pivotIndex] = 0;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      await swap(arr, i, pivotIndex);
      states[pivotIndex] = -1;
      pivotIndex++;
      states[pivotIndex] = 0;
    }
  }
  await swap(arr, pivotIndex, end);

  for (let i = start; i < end; i++) {
    states[i] = -1;
  }

  return pivotIndex;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}