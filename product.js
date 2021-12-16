function order() {

    let response = document.createElement("h3");
    let quantity = document.querySelector("#quantity");
    console.log(quantity.value);
    response.innerHTML = "";
    if (document.querySelector("#city").value !== "" && document.querySelector("#address").value !== "") {

    }

}

let prodId = localStorage.getItem('PRODUCT');
let img = localStorage.getItem("IMG");
console.log(prodId);
product();

function product() {
    fetch('https://skyscraprzceresapp.azurewebsites.net/Products/Details/' + prodId, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
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
                //console.log(res.json())
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
                    span3.append(data.quantity);
                    span4.append(data.shop);
                    span5.append(data.description);

                });
            } else console.log("Fail");

        })
        .catch(error => {
            console.log('Error');
        })
}