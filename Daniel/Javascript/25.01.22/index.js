/*const duplicates = [1,2,2,3,6,7,2,3,5,7,8,9,9,3]

function removeDuplicates(array){
    const result = [];
    for(const item of array){
        if (!result.includes(item)) {
            result.push(item);        
    }
}
    return result;
}

console.log(removeDuplicates(duplicates)); */

/*function unionAll(firstArray, secondArray){
    const result [];
    for(const item of firstArray){
        result.push(item);
    }
    for(const item of secondArray){
        result.push(item);
    }
}

const arrayOne = [1,2,3,1];
const arrayTwo = [4,5,6];
const combinedArray = unionAll(arrayOne, arrayTwo);
console.log(combinedArray);




const firstArray = [1,2,3,1];
const secondArray = [4,5,6];
const combinedArray = unionAll (firstArray, secondArray);
console log(combinedArray);


const neuerKübel = []
for (const item of firstArray){
    push item to neuerKübel;
}
for (const item of secondArray){
    push item to neuerKübel;
}
*/

const arrayOne = [1,2,3,4];
const arrayTwo = [3,4,5,6];
const intersection = intersect (arrayOne, arrayTwo);

console.log(intersection)

function intersect (arrayOne,arrayTwo) {
    const result = [];
    for (const itemOne of arrayOne) {
        for (const itemOne of arrayTwo) {
            if(itemOne == itemTwo) {
                result.push(itemOne);
                break;
            }
    }
}
return result;
}