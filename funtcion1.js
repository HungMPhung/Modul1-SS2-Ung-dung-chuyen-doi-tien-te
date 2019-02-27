function convert(){
    let amount = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("from-currency").value;
    let toCurrency = document.getElementById("to-currency").value;
    let result = 0;
    if (fromCurrency === "USD" && toCurrency === "VND")
        result = amount*23000;
    else if (fromCurrency === "VND" && toCurrency === "USD") 
        result = amount/23000;
else
    result = "Moi ban kiem tra lai";
    document.getElementById("result").innerText=result;
}



