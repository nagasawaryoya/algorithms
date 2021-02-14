export class Util {
  /**
   * 存在チェック
   *
   * @param {any} arg 検証値
   * @returns {arg is T} true: 存在 false: 非存在
   */
  public static is = <T>(arg: any): arg is T => typeof arg !== 'undefined' && arg !== null;

  /**
   * 値の比較
   *
   * @param {T} expectBig 比較時に大きいと予想している値
   * @param {T} expectSmall 比較時に小さいと予想している値
   * @returns {boolean} true: expectBigの方がexpectSmallより大きい false: expectBigの方がexpectSmallより小さい
   */
  public static compare = <T>({ expectBig, expectSmall }: { expectBig: T; expectSmall: T }): boolean =>
    expectBig > expectSmall;

  /**
   * 引数で受け取った要素の順序を入れ替える。
   *
   * @param {T[]} array 順序入れ替え前の配列
   * @param {number} index1 入れ替える要素のindex1
   * @param {number} index2 入れ替える要素のindex2
   * @returns {T[]} 順序入れ替え後の配列
   */
  public static swap = <T>({ array, index1, index2 }: { array: T[]; index1: number; index2: number }): T[] => {
    const tmp = array[index1];
    array[index1] = array[index2];
    array[index2] = tmp;

    return array;
  };
}
