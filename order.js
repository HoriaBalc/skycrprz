seeOrder();



function seeOrder() {
    orders.push(name);
    let name = sessionStorage.getItem('Nume');
    let price = sessionStorage.getItem('Pret');
    let quantity = sessionStorage.getItem('Cant');
    if (name !== "") {
        let main = document.getElementById("main")
        let contain = document.createElement("fieldset");
        let legend = document.createElement("legend");
        legend.innerText = name;
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let span1 = document.createElement("span");
        let span2 = document.createElement("span");
        span1.innerText = price;
        span2.innerText = "Cantitate(kg): " + quantity;
        div1.append(span1);
        div2.append(span2);
        contain.append(legend);
        contain.append(div1);
        contain.append(div2);
        main.append(contain);


    }


}