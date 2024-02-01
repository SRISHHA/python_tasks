$(document).ready(function() {
 
    $('tbody tr').each(function(index, row) {
            let name = $(row).find('td:eq(0)').text();
            let age = $(row).find('td:eq(1)').text();
            let prgmlang = $(row).find('td:eq(2)').text();
            console.log(` Name:${name}, Age:${age}, prgmlang:${prgmlang}`);
        
        
    });
});
