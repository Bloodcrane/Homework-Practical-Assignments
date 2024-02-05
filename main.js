const replaceValues = (inputString, valueToReplace, valueToReplaceWith) => {
    let result = ''
    let currentIndex = 0
    let lastIndex = inputString.indexOf(valueToReplace)

    while (lastIndex !== -1) {
        result += `${inputString.substring(currentIndex, lastIndex)}${valueToReplaceWith}`
        currentIndex = lastIndex + valueToReplace.length
        lastIndex = inputString.indexOf(valueToReplace, currentIndex)
    }

    result += inputString.substring(currentIndex)

    return result
};

const inputString = "gamarjoba naxvamdis !"
const replacedString = replaceValues(inputString, "naxvamdis", "!")
console.log(replacedString)

/// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// 

function allLetterCapitalize(sentence) {
    const words = sentence.split(" ")

    const capitalizedWords =  words.map(word => {

        return word.charAt(0).toUpperCase() + word.slice(1)
    });

    const newSentence = capitalizedWords.join(" ")
    return newSentence
}

const sentence = "helloo world"
const newSentence = allLetterCapitalize(sentence)
console.log(newSentence)

/// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// /// 

function sortUsersByAge(users) {
    users.sort((a, b) => a.age - b.age)
    return users

}
const users = 
[
    {name: 'Lasha', age: 30},
    {name: 'Saba', age: 20},
    {name: 'John', age: 25}
];


const newUsersList = sortUsersByAge(users)
console.log(newUsersList)
