function login() {
    let email = document.querySelector("#emailLogin").value;
    let password = document.querySelector("#passwordLogin").value;

    let data = {
        email,
        password,
    }

    fetch('https://skyscraprzceresapp.azurewebsites.net/Login', {
            method: 'POST',
            cache: 'no-cache',
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json',
                'charset': "utf-8",
                'accept': '*/*',
                'Access-Control-Allow-Origin': '*',
                'Origin': '*',

                'content-encoding': 'gzip'
            },

            body: JSON.stringify(data)
        }).then(res => {

            console.log(res.status);
            if (res.status === 200) {
                localStorage.setItem('login', email);
                alert(res.status);
                window.location.replace('./consumer.html');

            } else {
                alert("nu ai introdus datele bine");
            }
        })
        .catch(error => {
            console.log('Error');
        })

}

function register() {
    let email = document.querySelector("#emailRegister").value;
    let password = document.querySelector("#passwordRegister").value;
    let confirmedPassword = document.querySelector("#comfirmPasswordRegister").value;
    let lastName = document.querySelector("#lastName").value;
    let firstName = document.querySelector("#firstName").value;
    let data = {
        email,
        password,
        confirmedPassword,
        firstName,
        lastName
    }

    fetch('https://skyscraprzceresapp.azurewebsites.net/Register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'charset': "utf-8",
                'accept': '*/*',
                'Access-Control-Allow-Origin': '*',
                'Origin': '*',

                'content-encoding': 'gzip'
            },
            body: JSON.stringify(data)
        }).then(res => {
            console.log(res.status);
            if (res.status === 200) {
                localStorage.setItem('login', email);

                window.location.replace('./consumer.html');

            }
        })
        .catch(error => {
            console.log('Error');
        })


}