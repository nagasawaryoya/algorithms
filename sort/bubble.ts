/**
 * 引数で受け取った配列をバブルソートして返却する。
 *
 * @param arr number[] ソートする配列
 * @returns Generator<number | undefined, void, unknown>
 */
function *bubble(
  arr: number[]
): Generator<number | undefined, void, unknown> {
  let count = 0;
  let lastIndex = arr.length;

  while (arr.length > 0) {
    lastIndex = lastIndex - 1;
    if (count === arr.length) {
      yield arr.shift();
      count = 0;
      lastIndex = arr.length;
    } else {
      if (arr[lastIndex - 1] > arr[lastIndex]) {
        const temp1 = arr[lastIndex - 1];
        const temp2 = arr[lastIndex];
        arr[lastIndex] = temp1;
        arr[lastIndex - 1] = temp2;
      }
      count++;
    }
  }
}