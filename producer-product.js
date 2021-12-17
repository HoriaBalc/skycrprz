const onClickProduct = function() {

    localStorage.setItem("PRODUCT", this.id);
    alert(this.id + " " + this.innerHTML);
}
let id = localStorage.getItem('ID');


function see() {




    let name = localStorage.getItem('name');
    let description = localStorage.getItem('description');
    let price = localStorage.getItem('price');
    let quantity = localStorage.getItem('quantity');
    let categoryName = localStorage.getItem('category');
    let img = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg"





    let a = document.createElement("a");
    a.href = "updateProduct.html";
    a.className = "link";
    a.id = id;
    let productElement = document.createElement("div");
    productElement.className = "product";
    let fieldset = document.createElement("fieldset");
    let legend = document.createElement("legend");
    legend.innerHTML = name;
    let divImg = document.createElement("div");
    let imag = document.createElement("img");
    imag.src = img;
    console.log(img);
    imag.style.position = "relative";
    imag.style.top = "1rem";
    divImg.appendChild(imag);
    let divSpan = document.createElement("div");
    let span1 = document.createElement("span");
    let span2 = document.createElement("span");
    //let span3 = document.createElement("span");
    let span4 = document.createElement("span");
    span1.innerHTML = "Pret/Kg: " + price;
    span2.innerHTML = "Cantitate: " + quantity;
    //span3.innerHTML = "Producator: " + productsData[i].shop;
    span4.innerHTML = "Descriere: " + description;
    divSpan.appendChild(span1);
    divSpan.appendChild(span2);
    //divSpan.appendChild(span3);
    divSpan.appendChild(span4);
    fieldset.appendChild(legend);
    fieldset.appendChild(divImg);
    fieldset.appendChild(divSpan);
    productElement.appendChild(fieldset);
    a.appendChild(productElement);
    let products = document.getElementById("products");


    products.appendChild(a);


};





fetch('https://skyscraprzceresapp.azurewebsites.net/Products/GetProducts/' + 1, {
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
                productsData = data;
                if (productsData.length > 0)
                    for (let i = 0; i < productsData.length; i++) {
                        let a = document.createElement("a");
                        console.log(productsData[i].id);
                        a.href = "updateProduct.html";
                        a.className = "link";
                        a.id = productsData[i].id;
                        let productElement = document.createElement("div");
                        productElement.className = "product";
                        let fieldset = document.createElement("fieldset");
                        let legend = document.createElement("legend");
                        legend.innerHTML = productsData[i].name;
                        let divImg = document.createElement("div");
                        let imag = document.createElement("img");
                        imag.src = "https://www.safefood.net/getmedia/548194b3-ebd1-4997-a2ad-732c5c10ee51/fruit-vegetables.jpg?width=2716&height=1810&ext=.jpg";
                        imag.style.position = "relative";
                        imag.style.top = "1rem";
                        divImg.appendChild(imag);
                        let divSpan = document.createElement("div");
                        let span1 = document.createElement("span");
                        let span2 = document.createElement("span");
                        //let span3 = document.createElement("span");
                        let span4 = document.createElement("span");
                        span1.innerHTML = "Pret/Kg: " + productsData[i].price;
                        span2.innerHTML = "Cantitate: " + productsData[i].quantity;
                        //span3.innerHTML = "Producator: " + productsData[i].shop;
                        span4.innerHTML = "Descriere: " + productsData[i].description;
                        divSpan.appendChild(span1);
                        divSpan.appendChild(span2);
                        //divSpan.appendChild(span3);
                        divSpan.appendChild(span4);
                        fieldset.appendChild(legend);
                        fieldset.appendChild(divImg);
                        fieldset.appendChild(divSpan);
                        productElement.appendChild(fieldset);
                        a.appendChild(productElement);

                        let products = document.getElementById("products");


                        products.appendChild(a);
                        console.log(productElement);



                    }

            });
        }
    })
    .catch(error => {
        console.log('Error');
    })

if (id > 6) {
    see();
}


function add() {
    window.location.replace('./addProduct.html');
}