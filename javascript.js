// function numberUp() {

//     var value = parseInt(document.getElementById('newnum').value, 10);

//     value = isNaN(value) ? 0 : value; 
    
//     value++;

//     console.log(value)

//     document.getElementById('newnum').value = value;
// }


function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}