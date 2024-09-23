console.log("hello world");

// diffrent veriabels for testing true or falls
const s1 = "anagram";
const t1 = "nagaram";

const s2 = "cat";
const t2 = "car";

const s3 = "nose";
const t3 = "ones";

function grammer(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    //letCount = lettercount
    const letCount = {};

    for (const letter of s) {
        letCount[letter] = (letCount[letter] || 0) + 1;
    }

    for (const letter of t) {
        if (!letCount[letter]) {
            return false;
        }
        letCount[letter]--;
    }

    return true;
}

//show only result of s1 and t1 if you want to change it just put in a diffrend number
console.log(grammer(s1, t1)); 
