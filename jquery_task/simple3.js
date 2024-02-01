$(document).ready(function() {
    var rows = $('tbody tr');

    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var name = $(row).find('td:eq(0)').text();
        var age = $(row).find('td:eq(1)').text();
        var prgmlang = $(row).find('td:eq(2)').text();
        console.log(` Name:${name}, Age:${age}, prgmlang:${prgmlang}`);
    }
});
