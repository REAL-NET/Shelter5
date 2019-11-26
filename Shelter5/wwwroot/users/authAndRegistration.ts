//$(function authorization () {
//    $("#auth").submit(function () {
//        var formData = {
//            "inputEmail": $("#inputEmail").val()
//            , "inputPassword": $("#inputPassword").val()
//        };
//        var jsonObject = JSON.stringify(formData);
//        $.ajax({
//            url: ' '
//            , type: 'POST'
//            , data: 'jsonData=' + jsonObject
//            , success: function (res) {
//                alert(res);
//                console.log($.parseJSON(res).username);
//	            console.log($.parseJSON(res).token);
//            }
//        });
//        return false;
//    });
//});

async function registration() {
    const formData = new FormData();
    const username = document.getElementById('usernameReg').nodeValue;
    const emailField = document.getElementById('emailReg').nodeValue;
    const passwordRep = document.getElementById('passwordRpReg').nodeValue;
    const passwordField = document.getElementById('passwordReg').nodeValue;

    if (passwordField != passwordRep) {
        alert("Passwords do not mach");
        throw new Error('Passwords do not mach');
    }

    formData.append('email', emailField);
    formData.append('username', username);
    formData.append('password', passwordField);

    try {
        const response = await fetch('https://localhost:8080', {
            method: 'PUT',
            body: formData
        });
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const result = await response.json();
        //window.localStorage.setItem("token", result.Token);
        console.log('Success:', JSON.stringify(result));
        window.location.href = "../users/in.html";
        return result;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function authorization() {
    const formData = new FormData();
    const emailField = document.getElementById('inputEmail').nodeValue;
    const passwordField = document.getElementById('inputEmail').nodeValue;

    formData.append('email', emailField);
    formData.append('password', passwordField);

    try {
        const response = await fetch('https://localhost:8080', {
            method: 'PUT',
            body: formData
        });
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const result = await response.json();
        window.localStorage.setItem("token", result.Token);
        console.log('Success:', JSON.stringify(result));
        window.location.href = "../htmlpage.html";
        return result;
    } catch (error) {
        console.error('Error:', error);
    }
}