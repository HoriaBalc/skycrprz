let category = [];

fetch('https://skyscraprzceresapp.azurewebsites.net/Products/GetCategories', {
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
                category = data;
                console.log(category);
                for (let i = 0; i < category.length; i++) {
                    let divCategory = document.createElement("div");
                    divCategory.className = "category";

                    divCategory.id = category[i].id;
                    divCategory.onclick = onClickCategory;
                    let divItem = document.createElement("div");
                    divItem.className = "item";
                    let a = document.createElement("a");
                    a.className = "link parent";
                    let spanImg = document.createElement("span");
                    spanImg.className = "span-img";
                    let img = document.createElement("img");
                    img.width = 80;
                    img.height = 80;
                    /* if (i === 0) {
                         category[i].image.imageURL = "vegetables.jpg";
                     }*/
                    img.src = category[i].image.imageURL;
                    let spanText = document.createElement("span");
                    spanText.innerHTML = category[i].name;
                    spanText.className = "span-text";

                    divCategory.appendChild(divItem);
                    divItem.appendChild(a);
                    a.appendChild(spanImg);
                    a.appendChild(spanText);
                    spanImg.appendChild(img);

                    let categories = document.getElementById("maincategories");
                    categories.append(divCategory);
                    seeProducts(category[i], "");

                }
            });
        } else console.log("Fail");

    })
    .catch(error => {
        console.log('Error');
    })

let productsData = [];

async function seeProducts(category, string) {

    await fetch('https://skyscraprzceresapp.azurewebsites.net/Products/GetProducts/' + category.id, {
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

                            imag.src = category.image.imageURL;


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
                            a.onclick = onClick;
                            let products = document.getElementById("products");

                            if (string === "") {
                                products.appendChild(a);
                                console.log(productElement);
                            } else {
                                let name = productsData[i].name.toLowerCase();
                                let shop;
                                if (productsData[i].shop === null) {
                                    shop = "null";
                                } else {
                                    shop = productsData[i].shop.value.toLowerCase();
                                }
                                if (name.includes(string) || shop.includes(string)) {
                                    products.appendChild(a);
                                    console.log(productElement);
                                }
                            }

                        }

                });
            }
        })
        .catch(error => {
            console.log('Error');
        })
}

function selectText(containerid) {
    if (document.selection) { // IE
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select();
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
}

const onClick = function() {

    localStorage.setItem("PRODUCT", this.id);
    alert(this.id + " " + this.innerHTML);
    let el = this.getElementsByTagName('img')
    alert(el[0].src);
    localStorage.setItem("IMG", el[0].src);

}

const onClickCategory = function() {

    let prods = document.getElementsByClassName("product");
    while (prods.length > 0) {
        prods[0].parentNode.removeChild(prods[0]);
    }
    console.log(this);
    let el = this.getElementsByTagName('img')
    console.log(el[0]);
    let cat = {
        id: this.id,
        image: {
            imageURL: el[0].src
        }
    }
    seeProducts(cat, "");

}

async function search() {
    let searchBar = document.getElementById("search-bar").value.toLowerCase();
    console.log(searchBar);
    let prods = document.getElementsByClassName("product");
    while (prods.length > 0) {
        prods[0].parentNode.removeChild(prods[0]);
    }
    await fetch('https://skyscraprzceresapp.azurewebsites.net/Products/GetCategories', {
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

                    for (let i = 0; i < data.length; i++) {

                        console.log(data[i]);
                        seeProducts(data[i], searchBar);

                    }
                });
            } else console.log("Fail");

        })
        .catch(error => {
            console.log('Error');
        })

}