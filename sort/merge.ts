/**
 * 引数で受け取った配列をマージソートして返却する。
 *
 * @param {number[]} arr ソートする配列
 * @returns {number[]}
 */
const merge = (arr: number[]): number[] => {
  return arr;
};

const test = [6, 4, 3, 7, 5, 1, 2];

const split = (array: number[], result: any[] = []): any[] => {
  const right = array.splice(Math.ceil(array.length / 2));
  const left = array;

  if (left.length === 1 && right.length === 1) {
    result.push([left, right]);
  } else if (left.length === 1) {
    result.push([left]);
  } else if (right.length === 1) {
    result.push([right]);
  }

  if (left.length !== 1) {
    split(left, result);
  }
  if (right.length !== 1) {
    split(right, result);
  }
  return result;
};

const coalescence = (array: any[]) =>
  array.map((arr) => (arr[0] < arr[1] || !arr[1] ? [arr[0], arr[1] ?? null] : [arr[1], arr[0]]));

// const coalescence = (array: any[]) => array.map((arr) => arr);
// split(test, []);
console.log(coalescence(split(test)));
