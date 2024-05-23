import { merge } from '../src/mergeSort';

test("Merge sort must correct", () => {
  const collection_1: number[] = [6, 5, 4, 10];
  const collection_2: number[] = [1, 2, 3];
  const collection_3: number[] = [7, 8, 9];

  const result: number[] = merge(collection_1, collection_2, collection_3);
  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});