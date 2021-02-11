export class Util {
  /**
   * 引数で受け取った要素の順序を入れ替える。
   *
   * @param {T[]} array 順序入れ替え前の配列
   * @param {number} index1 入れ替える要素のindex1
   * @param {number} index2 入れ替える要素のindex2
   * @returns {T[]} 順序入れ替え後の配列
   */
  public static swap<T>({
    array,
    index1,
    index2,
  }: {
    array: T[];
    index1: number;
    index2: number;
  }): T[] {
    const tmp = array[index1];
    array[index1] = array[index2];
    array[index2] = tmp;
    return array;
  }
}