function update() {
    console.log("siiii")
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#parola").value;
    let confirmedPassword = document.querySelector("#confirm").value;
    let lastName = document.querySelector("#lastName").value;
    let firstName = document.querySelector("#firstName").value;
    let phoneNumber = document.querySelector("#phone").value;
    let data = {
        email,
        password,
        confirmedPassword,
        firstName,
        lastName,
        phoneNumber
    }



    fetch('https://skyscraprzceresapp.azurewebsites.net/Edit', {
            method: 'PUT',
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