/**
 * 引数で受け取った配列を選択ソートして返却する。
 *
 * @param {number[]} arr ソートする配列
 * @returns {Generator<number | undefined, void, unknown>}
 */
function* select(arr: number[]): Generator<number | undefined, void, unknown> {
  while (arr.length > 0) {
    yield arr.splice(
      arr.findIndex((a) => a === Math.min(...arr)),
      1,
    )[0];
  }
}
