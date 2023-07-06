// let num = [2, 7, 11, 15];

// let ans = num[0] + num[1];
// console.log("Addition:", ans);

// ======================================================================================================

let x = 121;

let ans = x.toString();
console.log("🚀 ~ file: Example.js:11 ~ ans:", ans)

let ans1 = ans.split('');
console.log("🚀 ~ file: Example.js:14 ~ ans1:", ans1);

let rev = ans1.reverse();
console.log("🚀 ~ file: Example.js:17 ~ rev:", rev);

let joinn = rev.join('');
console.log("🚀 ~ file: Example.js:20 ~ joinn:", joinn);

if (ans == joinn) {

    console.log("Palindrome");

} else {

    console.log("Not Palindrome");

}

// ============================================================================================================
