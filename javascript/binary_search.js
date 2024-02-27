function binarySearch(arr, target) {

  if (arr.length === 0) {
    return false;
  }

  let midIdx = Math.floor(arr.length / 2);
  let midVal = arr[midIdx];

  if (midVal === target) {
    return true;
  }

  let left = arr.slice(0, midIdx);
  let right = arr.slice(midIdx + 1);

  if (target < midVal) {
    return binarySearch(left, target)
  }
  if (target > midVal) {
    return binarySearch(right, target)
  }

}

// BONUS: MODIFY YOUR CODE TO RETURN THE INDEX OF THE TARGET, -1 IF NOT FOUND
function binarySearchIndex(arr, target) {
  if (arr.length === 0) {
    return -1;
  }

  let midIdx = Math.floor(arr.length / 2);
  let midVal = arr[midIdx];

  if (midVal === target) {
    return midIdx;
  }

  if (target < midVal) {
    return binarySearchIndex(arr.slice(0, midIdx), target);
  } else {
    let subIdx = binarySearchIndex(arr.slice(midIdx + 1), target);

    if (subIdx === -1) {
      return -1;
    }

    return subIdx + midIdx + 1;
  }


}

if (require.main === module) {
  // add your own tests in here
  // console.log("Expecting: true");
  // console.log("=>", binarySearch([1, 2, 3], 3));

  // console.log("");

  // console.log("Expecting: false");
  // console.log("=>", binarySearch([3, 5, 9], 10));

  // console.log("");

  // console.log("Expecting: true");
  // console.log("=>", binarySearch([3, 5, 7, 9], 7));

  // console.log("");

  // console.log("Expecting: true");
  // console.log("=>", binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 1));



  // UNCOMMENT FOR BONUS
  console.log("");
  console.log("Expecting: 0");
  console.log("=>", binarySearchIndex([1, 2, 3], 1));

  console.log("");
  console.log("Expecting: 0");
  console.log("=>", binarySearchIndex([1, 2, 3, 4, 5], 1));

  console.log("");

  console.log("");
  console.log("Expecting: 2");
  console.log("=>", binarySearchIndex([1, 2, 3, 4, 5], 3));

  console.log("");


  console.log("");
  console.log("Expecting: 1");
  console.log("=>", binarySearchIndex([1, 2, 3, 4, 5], 2));

  console.log("");

  console.log("");
  console.log("Expecting: 3");
  console.log("=>", binarySearchIndex([1, 2, 3, 4, 5], 4));

  console.log("");
  console.log("Expecting: 4");
  console.log("=>", binarySearchIndex([1, 2, 3, 4, 5], 5));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", binarySearchIndex([4, 7, 20], 100));
}

module.exports = {
  binarySearch,
  binarySearchIndex
};

// Add a written explanation of your solution
