var shoppingCart = (function () {
    cartList = [];
    function Item(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count;
    }
    function saveCart() {
        localStorage.setItem('shoppingCart', JSON.stringify(cartList));
    }
    function loadCart() {
        cartList = JSON.parse(localStorage.getItem('shoppingCart'));
    }
    if (localStorage.getItem('shoppingCart') != null) {
        loadCart();
    }


    var obj = {};
    obj.addItemtoCart = function (name, price, count) {
        for (var item in cartList) {
            if (cartList[item].name === name) {
                cartList[item].count++;
                saveCart();
                return;
            }
        }
        var item = new Item(name, price, count);
        cartList.push(item);
        saveCart();
    }

    obj.setCountForItem = function (name, count) {
        for (var i in cartList) {
            if (cartList[i].name === name) {
                cartList[i].count = count;
                break;
            }
        }
    };
    obj.removeItemFromCart = function (name) {
        for (var item in cartList) {
            if (cartList[item].name === name) {
                cartList[item].count--;
                if (cartList[item].count === 0) {
                    cartList.splice(item, 1);
                }
                break;
            }
        }
        saveCart();
    }
    obj.removeItemFromCartAll = function (name) {
        for (var item in cartList) {
            if (cartList[item].name === name) {
                cartList.splice(item, 1);
                break;
            }
        }
        saveCart();
    }
    obj.clearCart = function () {
        cartList = [];
        saveCart();
    }
    obj.totalCount = function () {
        var totalCount = 0;
        for (var item in cartList) {
            totalCount += cartList[item].count;
        }
        return totalCount;
    }
    obj.totalCart = function () {
        var totalCart = 0;
        for (var item in cartList) {
            totalCart += cartList[item].price * cartList[item].count;
        }
        return Number(totalCart);
    }
    obj.listCart = function () {
        var cartCopy = [];
        for (i in cartList) {
            item = cartList[i];
            itemCopy = {};
            for (p in item) {
                itemCopy[p] = item[p];

            }
            itemCopy.total = Number(item.price * item.count);
            cartCopy.push(itemCopy)
        }
        return cartCopy;
    }
    return obj;
})();

function plus() {
    if (acount.value == '99') {
        acount.value = `${(parseInt(acount.value) + 0)}`;
    }
    else if (acount.value == 'NaN') {
        acount.value = '0';
    }
    else {
        acount.value = `${(parseInt(acount.value) + 1)}`;
    }
}
function minus() {
    if (acount.value == '0') {
        acount.value = `${(parseInt(acount.value) - 0)}`;
    }
    else if (acount.value == 'NaN') {
        acount.value = '0';
    }
    else {
        acount.value = `${(parseInt(acount.value) - 1)}`;
    }
}

var cartArray = shoppingCart.listCart();
function displayCart() {
    
    var output = "";
    for(var i in cartArray) {
      output += "<tr>"
        + "<td class='font-primary-index fs-3'>" + cartArray[i].name + "</td>"
        + "<td class='font-primary-index fs-3'>$" + cartArray[i].price + "</td>"
        + "<td><div class='input-group'><input type='button' id='minus"+cartArray.indexOf(cartArray[i])+"' onclick = 'minusIncart("+cartArray.indexOf(cartArray[i])+")' class='PlusMinusBtn' value='-'>"
        + "<input id='item"+cartArray.indexOf(cartArray[i])+"' type='text' class='inputWriteCart' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
        + "<input type='button' id='plus"+cartArray.indexOf(cartArray[i])+"' onclick = 'plusIncart("+cartArray.indexOf(cartArray[i])+")' class='PlusMinusBtn' value='+'></div></td>"
        + "<td><input type='button' id='clear"+cartArray.indexOf(cartArray[i])+"' onclick = 'clearIteminCart("+cartArray.indexOf(cartArray[i])+")' class='btn btn-danger' value='X'></td>"
        +"<td class='font-primary-index fs-3'>總計：" + cartArray[i].total + "</td>"
        +  "</tr>";
    }
    // console.log(output);
    document.getElementById("cartDisplay").innerHTML += output;
}

function toCart(){
    var name = itemName.dataset.name;
    var price = Number(itemPrice.dataset.price);
    shoppingCart.addItemtoCart(name,price,parseInt(acount.value));
}


