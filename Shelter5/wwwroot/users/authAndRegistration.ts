$(function authorization () {
    $("#auth").submit(function () {
        var formData = {
            "inputEmail": $("#inputPassword").val()
            , "inputPassword": $("#inputPassword").val()
        };
        var jsonObject = JSON.stringify(formData);
        $.ajax({
            url: ' '
            , type: 'POST'
            , data: 'jsonData=' + jsonObject
            , success: function (res) {
                alert(res);
                console.log($.parseJSON(res).username);
	            console.log($.parseJSON(res).token);
            }
        });
        return false;
    });
});