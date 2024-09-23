console.log("hello world");

const nums = [1, 2, 3, 4, 2];  // number array

function findDuplicate(nums) {
    let A = nums[0];
    let B = nums[0];

    
    do {
        A = nums[A];
        B = nums[nums[B]];
    } while (A !== B);


    A = nums[0];  

    while (A !== B) {
        A = nums[A];
        B = nums[B];
    }

    return A;
}

// print result 
console.log("Duplicate number is:", findDuplicate(nums));
