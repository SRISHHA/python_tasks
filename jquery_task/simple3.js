$(document).ready(function() {
    var rows = $('tbody tr');//so it gives you back an array of row elements

    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];//accessing the element in the array
        var name = $(row).find('td:eq(0)').text();
        var age = $(row).find('td:eq(1)').text();
        var prgmlang = $(row).find('td:eq(2)').text();
        console.log(` Name:${name}, Age:${age}, prgmlang:${prgmlang}`);
    }
});
