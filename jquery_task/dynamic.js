$(document).ready(function()
{
    let table = $('<table>').attr('id', 'myDynamicTable');
    let thead = $('<thead>');
    let headerRow = $('<tr>');
    headerRow.append($('<th>').text('Name'));
    headerRow.append($('<th>').text('Age'));
    headerRow.append($('<th>').text('Language'));
    thead.append(headerRow);

    table.append(thead);

    let data = [
        { name: 'Danny', age: 23, language: 'Python' },
        { name: 'George', age: 25, language: 'Java' },
        { name: 'Joe', age: 24, language: 'C++' }
    ];

    let tbody = $('<tbody>');
    $.each(data, function(index, item) {
        let row = $('<tr>');
        row.append($('<td>').text(item.name));
        row.append($('<td>').text(item.age));
        row.append($('<td>').text(item.language));
        tbody.append(row);
    });

    table.append(tbody);

    $('body').append(table);
    $('tbody tr').each(function(index, row) {
        let name = $(row).find('td:eq(0)').text();
        let age = $(row).find('td:eq(1)').text();
        let prgmlang = $(row).find('td:eq(2)').text();
        console.log(` Name:${name}, Age:${age}, prgmlang:${prgmlang}`);
    
    
});

});