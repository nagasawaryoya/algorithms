import { Util } from './util';

type HeapNodeCount = ReadonlyArray<1 | 2>;
const HEAP_NODE_COUNT: HeapNodeCount = [1, 2];

/**
 * 引数で受け取った配列をヒープソートして返却する。
 *
 * @param {number[]} arr ソートする配列
 * @returns {number[]}
 */
const heap = (arr: number[]): number[] => {
  const sorted: number[] = [];
  while(arr.length > 0) {
    sorted.push(createHeap(arr).splice(0, 1)[0]);
  }
  return sorted;
}

/**
 * 親ノードのindexを探索する。
 *
 * @param {number[]} array 探索配列
 * @param {number} nodeIndex 探索の基準となるノードのindex
 * @returns {number | null} 探索の基準の数値に対する親ノードのindex（存在しない場合はnullを返す）
 */
const getParentNodeIndex = ({ array, nodeIndex }: { array: number[]; nodeIndex: number }): number | null =>
  HEAP_NODE_COUNT.map((count) =>
    Util.is(array[(nodeIndex - count) / 2]) ? (nodeIndex - count) / 2 : null,
  ).filter((pNodeIndex) => Util.is(pNodeIndex))[0];

/**
 * 配列にヒープ構造を適用する。
 *
 * @param {number[]} array ヒープ構造を適用する配列
 * @returns {number[]} ヒープ構造を適用後の配列
 */
const createHeap = (array: number[]): number[] => {
  let currentIndex = 0;
  while (Util.compare({ expectBig: array.length, expectSmall: currentIndex })) {
    const pNodeIndex = getParentNodeIndex({
      array: array,
      nodeIndex: currentIndex,
    });
    if (
      Util.is<number>(pNodeIndex) &&
      !Util.compare({
        expectBig: array[pNodeIndex],
        expectSmall: array[currentIndex],
      })
    ) {
      array = Util.swap({
        array: array,
        index1: pNodeIndex,
        index2: currentIndex,
      });
      currentIndex = pNodeIndex;
    } else {
      currentIndex++;
    }
  }

  return array;
};

//===========================================
// おまけ
//===========================================
/**
 * 親ノードを探索する。
 * (n - 1) / 2
 * (n - 2) / 2
 *
 * @param {number[]} array 探索配列
 * @param {number} nodeIndex 探索の基準となるノードのindex
 * @returns {number | null} 探索の基準の数値に対する親ノード（存在しない場合はnullを返す）
 */
const getParentNode = ({ array, nodeIndex }: { array: number[]; nodeIndex: number }): number | null =>
  array[(nodeIndex - HEAP_NODE_COUNT[0]) / 2] ?? array[(nodeIndex - HEAP_NODE_COUNT[1]) / 2] ?? null;

/**
 * 子ノードを探索する。
 * 2n + 1
 * 2n + 2
 *
 * @param {number[]} array 探索配列
 * @param {number} nodeIndex 探索の基準となるノードのindex
 * @returns {number[] | null} 探索の基準の数値に対する子ノードの配列（存在しない場合はnullを返す）
 */
const getChildNodes = ({ array, nodeIndex }: { array: number[]; nodeIndex: number }): number[] | null => {
  const children = HEAP_NODE_COUNT.map((count) => array[2 * nodeIndex + count]).filter((cNode) => Util.is(cNode));

  return children.length ? children : null;
};
