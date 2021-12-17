let produsId = localStorage.getItem('PRODUCT');

fetch('https://skyscraprzceresapp.azurewebsites.net/Products/Details/' + produsId, {
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
            res.json().then(data => {
                console.log(data);
                document.getElementById("produs").innerHTML = data.name;
                document.getElementById("descriere").placeholder = data.description;
                document.getElementById("pret").placeholder = data.price;
                document.getElementById("cantitate").placeholder = data.quantity;
                //document.getElementById("category").innerHTML = data.category;


            });
        } else console.log("Fail");

    })
    .catch(error => {
        console.log('Error');
    })


function updateProd() {
    let prodId = localStorage.getItem('PRODUCT');
    let name = document.getElementById("nume").value;
    let description = document.getElementById("descriere").value;
    let price = document.getElementById("pret").value;
    let quantity = document.getElementById("cantitate").value;
    let phoneNumber = "";
    let category = "";
    //let id = localStorage.getItem('ID');
    //id++;
    let shop = 0;
    let image = "";


    let data = {
        id,
        name,
        description,
        price,
        quantity,
        phoneNumber,
        shop,
        category,
        image,
    }

    if (data.name !== "" && data.description !== "" && data.quantity !== "" && data.price !== "") {
        localStorage.setItem('ID', id);
        alert("Produsul tau a fost modificat cu success");
        window.location.replace('./producer-product.html');
    } else {
        alert("A avut loc o eroare");
    }



}


function deleteProd() {
    let prodId = localStorage.getItem('PRODUCT');
    let name = document.getElementById("nume").value;
    let description = document.getElementById("descriere").value;
    let price = document.getElementById("pret").value;
    let quantity = document.getElementById("cantitate").value;
    let phoneNumber = "";
    let category = " ";
    //let id = localStorage.getItem('ID');
    //id++;
    let shop = 0;
    let image = "";


    let data = {
        id,
        name,
        description,
        price,
        quantity,
        phoneNumber,
        shop,
        category,
        image,
    }
    window.location.replace('./producer-product.html');

}