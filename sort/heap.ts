import { Util } from './util';

type HeapNodeCount = ReadonlyArray<1 | 2>;
const HEAP_NODE_COUNT: HeapNodeCount = [1, 2];

/**
 * 親ノードのindex探索
 */
const getParentNodeIndex = ({ array, nodeIndex }: { array: number[]; nodeIndex: number }): number | null =>
  HEAP_NODE_COUNT.map((count) =>
    Util.is(array[(nodeIndex - count) / 2]) ? (nodeIndex - count) / 2 : null,
  ).filter((pNodeIndex) => Util.is(pNodeIndex))[0];

const createHeap = (array: number[]): number[] => {
  let currentIndex = 0;
  while (array.length > currentIndex) {
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
 * 親ノードの探索
 * (n - 1) / 2
 * (n - 2) / 2
 */
const getParentNode = ({ array, nodeIndex }: { array: number[]; nodeIndex: number }): number | null =>
  array[(nodeIndex - HEAP_NODE_COUNT[0]) / 2] ?? array[(nodeIndex - HEAP_NODE_COUNT[1]) / 2] ?? null;

/**
 * 子ノードの探索
 * 2n + 1
 * 2n + 2
 */
const getChildNodes = ({ array, nodeIndex }: { array: number[]; nodeIndex: number }): number[] | null => {
  const children = HEAP_NODE_COUNT.map((count) => array[2 * nodeIndex + count]).filter((cNode) => Util.is(cNode));

  return children.length ? children : null;
};
