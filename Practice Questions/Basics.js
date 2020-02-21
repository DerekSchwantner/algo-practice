
// Reverse a string
const  reversStr = (st) => {
    return st.split('').reverse().join('')
}

// console.log(reversStr("Derek"))


const arr = [1,2,3,4,5]


//removes duplicates in a string
const removesDups = (str) => {
    newArr = []
    let arr = str.split(' ')
    for (let i = 0; i < arr.length; i++){
        if (!newArr.includes(arr[i].toLowerCase())) {
            newArr.push(arr[i])
        }
    }

    return newArr.join(" ")
}

// console.log(removesDups("This is is a test test string is is"))

const removesDups2 = (str) => {
    newSet = new Set(str.split(' '))
    //the spread operator in brackers will create an array from the values of the set
    return [...newSet].join(" ")
}

// console.log(removesDups2("This is is a test test string is is"))

//Flatten an array
const exArr = [1,[2,3,4], 5, 6, [7, [8,9]]]
const flattenArr = (arr) => {
     arr.reduce((acc, item) => {
        if (Array.isArray(item)){
            acc = acc.concat(flattenArr(item))
        } else {
            acc.push(item);

        }
         return acc;
    }, []);
}

// console.log(flattenArr(exArr))

//Implementing Function.prototype.bind(), basically the theme is how do you change scope

function bind (context) {
    const fn = this;


    return function () {
        fn.call(context)
    }
}

//  implement debounce

function debounce(fn, time) {
    let setTimeoutId

    return function () {
       setTimeoutId = setTimeout(() => {
            fn.apply(this, arguments);
            setTimeoutId = null
        }, time)
    }
}

// Create a sleep function that takes one parameter (time) and
// will wait "time" ms

/*
    async function run() {
        await sleep(500);
        console.log('hello');
        await sleep(500);
        console.log('world');
    }
*/

async function sleep(time) {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time)
    })
}