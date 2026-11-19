
//Preparing the test data
function makeTheArray(n) {
    return Array.from({length: n}, () => Math.floor(Math.random() * 1000000));
}

var millionElementsArray = makeTheArray(1000000).sort((a,b) => a - b);
var findThis = 555;


function findTheElement(millionElementsArray, valueToBeFound, beg, end) {
    if (beg >= end && millionElementsArray[beg] !== valueToBeFound) {
        return false;
    }

    let middleMan = Math.floor( ((end + beg) / 2) );
    console.log(`The middle man: `, millionElementsArray[middleMan]);
    if (millionElementsArray[middleMan] === valueToBeFound) {
        return true;
    }

    if (valueToBeFound > millionElementsArray[middleMan]) {
        return findTheElement(millionElementsArray, valueToBeFound, middleMan + 1, end);
    }

    if (valueToBeFound < millionElementsArray[middleMan]) {
        return findTheElement(millionElementsArray, valueToBeFound, beg, middleMan -1);
    }

}

console.log(millionElementsArray);

var result = findTheElement(millionElementsArray, findThis, 0, millionElementsArray.length);

console.log(`The element ${findThis} is ${result ? "Found" : "Not found"}`, findThis, result);
