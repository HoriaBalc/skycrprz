product();

function product() {
    let prodId = localStorage.getItem('PRODUCT');
    let img = localStorage.getItem("IMG");
    fetch('https://skyscraprzceresapp.azurewebsites.net/Products/Details/' + prodId, {
            method: 'GET',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'charset': "utf-8",
                'accept': '*/*',
                'Access-Control-Allow-Origin': '*',
                'Origin': '*',

                'content-encoding': 'gzip'
            },
        })
        .then(res => {
            if (res.ok) {
                console.log(res.data)
                res.json().then(data => {
                    console.log(data);
                    let prod = document.getElementById('product-img');
                    prod.src = localStorage.getItem('IMG');
                    let span1 = document.getElementById('1');
                    let span2 = document.getElementById('2');
                    let span3 = document.getElementById('3');
                    let span4 = document.getElementById('4');
                    let span5 = document.getElementById('5');
                    span1.append(data.name);
                    span2.append(data.price);
                    span3.append(data.quantity + " kg");
                    //span4.append(data.shop);
                    span5.append(data.description);

                });
            } else console.log("Fail");

        })
        .catch(error => {
            console.log('Error');
        })
}

function order() {

    let quantity = document.querySelector("#quantity").value;

    console.log(quantity);
    if (quantity >= 1) {

        alert("Ati plasat comanda cu success");
        sessionStorage.setItem('Nume', document.getElementById('1').innerText);
        sessionStorage.setItem('Pret', document.getElementById('2').innerText);
        sessionStorage.setItem('Cant', quantity);
        window.location.replace('./consumer.html');


    }



}