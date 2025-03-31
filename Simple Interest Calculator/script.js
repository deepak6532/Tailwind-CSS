function calcu(){
    let amount = parseInt(document.getElementById("amt").value);
    let interest = parseFloat(document.getElementById("inte").value);
    let month = parseFloat(document.getElementById("month").value);

    if (isNaN(amount) || isNaN(interest) || isNaN(month) || amount <= 0 || interest <= 0 || month <= 0) {
        document.getElementById("result").innerHTML = "Please enter valid positive numbers.";
        return;
    }

    let total = ((amount * interest * month) / 100).toFixed(2);
   document.getElementById("result").innerHTML = "Your total interest is: " + total;


}