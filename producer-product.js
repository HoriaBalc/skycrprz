const onClickProduct = function() {

    localStorage.setItem("PRODUCT", this.id);
    alert(this.id + " " + this.innerHTML);
}



fetch('https://skyscraprzceresapp.azurewebsites.net/Products/GetProducts/' + 3, {
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
                        a.href = "product.html";
                        a.className = "link";
                        a.id = productsData[i].id;
                        let productElement = document.createElement("div");
                        productElement.className = "product";
                        let fieldset = document.createElement("fieldset");
                        let legend = document.createElement("legend");
                        legend.innerHTML = productsData[i].name;
                        let divImg = document.createElement("div");
                        let imag = document.createElement("img");
                        imag.src = "https://www.dairyfoods.com/ext/resources/DF/2020/August/df-100/GettyImages-1194287257.jpg?1597726305";
                        imag.style.position = "relative";
                        imag.style.top = "1rem";
                        divImg.appendChild(imag);
                        let divSpan = document.createElement("div");
                        let span1 = document.createElement("span");
                        let span2 = document.createElement("span");
                        let span3 = document.createElement("span");
                        let span4 = document.createElement("span");
                        span1.innerHTML = "Pret/Kg: " + productsData[i].price;
                        span2.innerHTML = "Cantitate: " + productsData[i].quantity;
                        span3.innerHTML = "Producator: " + productsData[i].shop;
                        span4.innerHTML = "Descriere: " + productsData[i].description;
                        divSpan.appendChild(span1);
                        divSpan.appendChild(span2);
                        divSpan.appendChild(span3);
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

function add() {
    window.location.replace('./addProduct.html');
}