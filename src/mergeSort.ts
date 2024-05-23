export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
  const unSortCollection: number[] = [...collection_1, ...collection_2, ...collection_3];

  return mergeCollection(unSortCollection);;
}

export function mergeCollection(collection: number[]): number[] {
  if (collection.length < 2) return collection;

  const middle: number = Math.floor(collection.length / 2);
  const leftCollection = collection.slice(0, middle);
  const rightCollection = collection.slice(middle);

  return mergeSort(mergeCollection(leftCollection), mergeCollection(rightCollection));
}

export function mergeSort(leftCollection: number[], rightCollection: number[]): number[] {
  const sortCollection: number[] = [];

  while (leftCollection.length && rightCollection.length) {
    if (leftCollection[0] < rightCollection[0]){ 
      const leftVal = leftCollection.shift();
      if (leftVal !== undefined) {
        sortCollection.push(leftVal);
      }
    } else {
      const rightVal = rightCollection.shift();
      if (rightVal !== undefined) {
        sortCollection.push(rightVal);
      }
    }
  }

  return [...sortCollection, ...leftCollection, ...rightCollection];
}