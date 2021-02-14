import { Util } from './util';

/**
 * 引数で受け取った配列を挿入ソートして返却する。
 *
 * @param {number[]} arr ソートする配列
 * @returns {number[]}
 */
function insert(arr: number[]): number[] {
  let count = 0;
  let current = count;
  while (count < arr.length) {
    if (current >= 0 && arr[current] < arr[current - 1]) {
      arr = Util.swap<number>({ array: arr, index1: current, index2: current - 1 });
      current--;
    } else {
      current = count++;
    }
  }
  return arr;
}

/**
 * 引数で受け取った配列を挿入ソートして返却する。(再帰ver)
 *
 * @description
 * 配列の長さ8000くらいでスタックオーバーフロー
 *
 * @param {number[]} arr ソートする配列
 * @param {number} count 基準位置
 * @returns {number[]}
 */
function insertRecursion(arr: number[], count: number = 0): number[] {
  let current = count;
  while (current >= 0 && arr[current] < arr[current - 1]) {
    arr = Util.swap<number>({ array: arr, index1: current, index2: current - 1 });
    current--;
  }
  return count === arr.length ? arr : insertRecursion(arr, count + 1);
}
