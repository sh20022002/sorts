
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    // returns the lowest recution
    const pivot = Math.floor(Math.random() * arr.length);
    // randomized pivot
    const left = [];
    const right = [];
    // left for all values smaller then the pivot
    // right for all values larger then the pivot
    for(let i = 0; i < arr.length; i++){
        if(i === pivot) continue;
        // for index on pivot

        if(arr[i] < arr[pivot]){
            // pushs the smaller values to left
            left.push(arr[i]);
        }else{
            // if the value is larger or equal to pivot
            right.push(arr[i])
        }
    }
    return [...quickSort(left), arr[pivot], ...quickSort(right)];
    // returns an array with the smaller values before the pivot the pivot and
    // the values larger then the pivot recursevly
}

// Example usage:
const unsortedArray = [9, 2, 7, 4, 5, 8, 6, 3, 1];
const sortedArray = quickSort(unsortedArray);
console.log("Sorted array:", sortedArray);
