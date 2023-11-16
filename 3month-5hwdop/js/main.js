document.getElementById('button').addEventListener('click', function() {
    var colorValue = document.getElementById('text').value;

    document.getElementById('col2').style.backgroundColor = colorValue;
});