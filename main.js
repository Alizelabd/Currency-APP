let currencySledcted = document.querySelector("#currency");
let inputUSD = document.querySelector(".usd");
let inputSubmit = document.querySelector(".submit");
let result = document.querySelector(".result-div");
let typedCoin = document.querySelector(".typed");
let valueMycoin;

currencySledcted.onchange = function () {
    console.log(valueMycoin);
    valueMycoin = currencySledcted.value;
    console.log(valueMycoin);
    
}

fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=8e172c91090d4f3085c2669be902ae59")
    .then((rates) => {
        return rates.json();
    })
    .then((se) => {
        // console.log(se);
        // console.log(se.rates);
        let arrayCoin = ["SYP", "EGP", "SAR"];
        let ses = se.rates;
        let ses5 = Object.keys(se.rates);
        ses5.forEach((e) => {
            let optionEle = document.createElement("option");
            let textOptionEle = document.createTextNode(e);
            optionEle.appendChild(textOptionEle);
            optionEle.value = (e);
            currencySledcted.appendChild(optionEle);
        });
        // console.log(ses[arrayCoin[valueMycoin]]);
        inputSubmit.onclick = function () {
            if (inputUSD.value == "" || inputUSD.value == null || valueMycoin == undefined) {
                    document.querySelector(".notic").style.display = "block";
                    inputUSD.value = "";
            } else {
                document.querySelector(".notic").style.display = "none";
                result.textContent = `Result: ${Math.floor(inputUSD.value * ses[valueMycoin])} ${valueMycoin}`;
            }
        }
    });