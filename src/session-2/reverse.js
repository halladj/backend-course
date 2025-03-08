function reverseList(list){
    let tempVal;

    // use for loop to reverse the list.
    for (let i = 0; i < list.length/2; i++){
        tempVal = list[i]
        list[i] = list[list.length - i - 1]
        list[list.length - i - 1] = tempVal
    }
    return list
}


console.log(reverseList([5,4,3,2,1]))
console.log(reverseList([11,12,13,14]))