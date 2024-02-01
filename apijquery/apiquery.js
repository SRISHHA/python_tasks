$(document).ready(function() {
    var headers = {
        'QB-Realm-Hostname': 'builderprogram-sdunesh.quickbase.com',
        'Authorization': 'QB-USER-TOKEN b825b8_qxee_0_b7dk64hbq3ziayiv5gkri6gfay',
        'Content-Type': 'application/json'
    };
    var body = {
        "from": "btv3vm8ng",
    };

    $.ajax({
        url: 'https://api.quickbase.com/v1/records/query',
        method: 'POST',
        headers: headers,
        data: JSON.stringify(body),
        success: function(result) {
            $.each(result.data, function(index, item) {
                var row = $("<tr>");

                
                var columnOrder = [17, 18, 19, 20, 21, 22, 23, 25, 26];

                for (var i = 0; i < columnOrder.length; i++) {
                    var key = columnOrder[i].toString();
                    var value = item[key] ? item[key].value : "";
                    row.append("<td>" + value + "</td>");
                }

                $("tbody").append(row);
            });
        },
        error: function(error) {
            console.error("Error fetching data:", error);
        }
    });
});