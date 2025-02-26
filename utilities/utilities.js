
// value ke parsInt value te convert korte aita use korbo.  
function getInputValueById(id){
    const value = document.getElementById(id).value;
    console.log(value);
    const convertedValue = parseInt(value);
    console.log(convertedValue);
    return  convertedValue ;
}


//text to string to number convert korte use korbo aita.
function getInputTextById(id){
    const mainBalance = document.getElementById(id).innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    return convertedMainBalance;
}

// konokisu set korar jnno aita use korbo.
function setInnerTextByIdAndValue(id, value){
    document.getElementById(id).innerText = value;
}

// //toggle type check
// function handleToggle(id,status){
//     document.getElementById(id).style.display = status;
// }