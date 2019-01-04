var openTab = function(tab) {
    var x = document.getElementsByClassName('titles');
    console.log(x);

    for(var i = 0 ; i < x.length ; i++) {
        x[i].style.display = 'none';
    }
    document.getElementById(tab).style.display = 'block';
}