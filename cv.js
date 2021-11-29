

//a function that checks if the phone number is numbers only, and 10 digits exactly.
    function myFunction() {
        const inpObj = document.getElementById("id1");
        if (!inpObj.checkValidity() || inpObj.value.length!=10) {
        document.getElementById("demo").innerHTML = "The PhoneNumber Is Not Valid, Make Sure to Enter 10 Numbers Exactly, Without Any Letters.";
        } else {
        document.getElementById("demo").innerHTML = "The PhoneNumber Is Valid.";
        } 
        } 