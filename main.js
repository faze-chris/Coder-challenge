console.log("hello world");

const nums = [2,7,11,15]; // number array
const target = 9;  // target sum

function numbers(nums, target) {
    const numb = {};

    for (let i = 0; i < nums.length; i++) {
        const number = target - nums[i];
        if (number in numb) {
            return [numb[number], i];
        }
        numb[nums[i]] = i;
    }
}

//consol log result
console.log(numbers(nums, target));
