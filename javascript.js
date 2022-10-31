function numberUp() {
    var stinky = document.getElementById('newnum');

    console.log(stinky)

    var numberino = stinky.innerHTML

    ++numberino;

    console.log(numberino)

    document.getElementById=('newnum').innerHTML = numberino;
}
