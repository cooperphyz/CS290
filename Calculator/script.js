for (let day = 1; day <= 31; day++) {
    console.log(day)
}
function calculate() {
    var num1, num2, res;
    num1=(document.formcalc.number1.value)
    switch (document.formcalc.base1.value) {
        case "decimal":
            switch(document.formcalc.base2.value) {
                case "decimal":
                    document.formcalc.result1.value=num1
            }
            switch(document.formcalc.base2.value) {
                case "hex":
                    hexString = num1.toString(16)
                    hexString = hexString.toUpperCase();
                    document.formcalc.result1.value=hexString;
            }
            switch(document.formcalc.base2.value) {
                case "binary":
                    binaryString = convertToBinary(num1)
                    document.formcalc.result1.value=binaryString
            }
            break;
        case "hex":
            switch(document.formcalc.base2.value) {
                case "decimal":
                    decString = parseInt(num1, 16);
                    document.formcalc.result1.value = decString;
            }
            switch(document.formcalc.base2.value) {
                case "hex":
                    num1 = num1.toUpperCase()
                    document.formcalc.result1.value=num1
            }
            switch(document.formcalc.base2.value) {
                case "binary":
                    binaryString = hex2bin(num1)
                    document.formcalc.result1.value=binaryString
            }
            break;
        case "binary":
            switch(document.formcalc.base2.value) {
                case "decimal":
                    var decimalString = parseInt(num1, 2);
                    document.formcalc.result1.value=decimalString
            }
            switch(document.formcalc.base2.value) {
                case "hex":
                    var hexString = parseInt(num1, 2).toString(16);
                    hexString = hexString.toUpperCase()
                    document.formcalc.result1.value=hexString
            }
            switch(document.formcalc.base2.value) {
                case "binary":
                    document.formcalc.result1.value=num1
            }
            break;
    }
}
function calculate2() {
    var num1, num2, res;
    num1=(document.formcalc2.number1.value)
    switch (document.formcalc2.base1.value) {
        case "decimal":
            switch(document.formcalc2.base2.value) {
                case "decimal":
                    document.formcalc2.result1.value=num1
            }
            switch(document.formcalc2.base2.value) {
                case "hex":
                    hexString = num1.toString(16)
                    hexString = hexString.toUpperCase();
                    document.formcalc2.result1.value=hexString;
            }
            switch(document.formcalc2.base2.value) {
                case "binary":
                    binaryString = convertToBinary(num1)
                    document.formcalc2.result1.value=binaryString
            }
            break;
        case "hex":
            switch(document.formcalc2.base2.value) {
                case "decimal":
                    decString = parseInt(num1, 16);
                    document.formcalc2.result1.value = decString;
            }
            switch(document.formcalc2.base2.value) {
                case "hex":
                    num1 = num1.toUpperCase()
                    document.formcalc2.result1.value=num1
            }
            switch(document.formcalc2.base2.value) {
                case "binary":
                    binaryString = hex2bin(num1)
                    document.formcalc2.result1.value=binaryString
            }
            break;
        case "binary":
            switch(document.formcalc2.base2.value) {
                case "decimal":
                    var decimalString = parseInt(num1, 2);
                    document.formcalc2.result1.value=decimalString
            }
            switch(document.formcalc2.base2.value) {
                case "hex":
                    var hexString = parseInt(num1, 2).toString(16);
                    hexString = hexString.toUpperCase()
                    document.formcalc2.result1.value=hexString
            }
            switch(document.formcalc2.base2.value) {
                case "binary":
                    document.formcalc2.result1.value=num1
            }
            break;
    }
}
function calculate3() {
    var num1, num2, res;
    num1=(document.formcalc3.number1.value)
    switch (document.formcalc3.base1.value) {
        case "decimal":
            switch(document.formcalc3.base2.value) {
                case "decimal":
                    document.formcalc3.result1.value=num1
            }
            switch(document.formcalc3.base2.value) {
                case "hex":
                    hexString = num1.toString(16)
                    hexString = hexString.toUpperCase();
                    document.formcalc3.result1.value=hexString;
            }
            switch(document.formcalc3.base2.value) {
                case "binary":
                    binaryString = convertToBinary(num1)
                    document.formcalc3.result1.value=binaryString
            }
            break;
        case "hex":
            switch(document.formcalc3.base2.value) {
                case "decimal":
                    decString = parseInt(num1, 16);
                    document.formcalc3.result1.value = decString;
            }
            switch(document.formcalc3.base2.value) {
                case "hex":
                    num1 = num1.toUpperCase()
                    document.formcalc3.result1.value=num1
            }
            switch(document.formcalc3.base2.value) {
                case "binary":
                    binaryString = hex2bin(num1)
                    document.formcalc3.result1.value=binaryString
            }
            break;
        case "binary":
            switch(document.formcalc3.base2.value) {
                case "decimal":
                    var decimalString = parseInt(num1, 2);
                    document.formcalc3.result1.value=decimalString
            }
            switch(document.formcalc3.base2.value) {
                case "hex":
                    var hexString = parseInt(num1, 2).toString(16);
                    hexString = hexString.toUpperCase()
                    document.formcalc3.result1.value=hexString
            }
            switch(document.formcalc3.base2.value) {
                case "binary":
                    document.formcalc3.result1.value=num1
            }
            break;
    }
}
function calculate4() {
    var num1, num2, res;
    num1=(document.formarithmatic1.number1.value)
    num2=(document.formarithmatic1.number2.value)
    switch (document.formarithmatic1.base1.value) {
        case "decimal":
            switch(document.formarithmatic1.base2.value) {
                case "addition":
                    res = Number(num1) + Number(num2);
                    document.formarithmatic1.result1.value=res;
            }
            switch(document.formarithmatic1.base2.value) {
                case "subtraction":
                    res = Number(num1) - Number(num2);
                    document.formarithmatic1.result1.value=res;
            }
            break;
        case "hex":
            switch(document.formarithmatic1.base2.value) {
                case "addition":
                    decString1 = parseInt(num1, 16);
                    decString2 = parseInt(num2, 16);
                    res = Number(decString1) + Number(decString2);
                    hexString = res.toString(16)
                    hexString = hexString.toUpperCase()
                    document.formarithmatic1.result1.value=hexString;
            }
            switch(document.formarithmatic1.base2.value) {
                case "subtraction":
                    decString1 = parseInt(num1, 16);
                    decString2 = parseInt(num2, 16);
                    res = Number(decString1) - Number(decString2);
                    hexString = res.toString(16)
                    hexString = hexString.toUpperCase()
                    document.formarithmatic1.result1.value=hexString;
            }
            break;
        case "binary":
            switch(document.formarithmatic1.base2.value) {
                case "addition":
                    var num1 = parseInt(num1, 2);
                    var num2 = parseInt(num2, 2);
                    res = Number(num1) + Number(num2);
                    var binaryString = convertToBinary(res)
                    document.formarithmatic1.result1.value=binaryString;
            }
            switch(document.formarithmatic1.base2.value) {
                case "subtraction":
                    var num1 = parseInt(num1, 2);
                    var num2 = parseInt(num2, 2);
                    res = Number(num1) - Number(num2);
                    var binaryString = convertToBinary(res)
                    document.formarithmatic1.result1.value=binaryString;
            }
            break;
    }
}
function calculate5() {
    var num1, num2, res;
    num1=(document.formarithmatic2.number1.value)
    num2=(document.formarithmatic2.number2.value)
    switch (document.formarithmatic2.base1.value) {
        case "decimal":
            switch(document.formarithmatic2.base2.value) {
                case "addition":
                    res = Number(num1) + Number(num2);
                    document.formarithmatic2.result1.value=res;
            }
            switch(document.formarithmatic2.base2.value) {
                case "subtraction":
                    res = Number(num1) - Number(num2);
                    document.formarithmatic2.result1.value=res;
            }
            break;
        case "hex":
            switch(document.formarithmatic2.base2.value) {
                case "addition":
                    decString1 = parseInt(num1, 16);
                    decString2 = parseInt(num2, 16);
                    res = Number(decString1) + Number(decString2);
                    hexString = res.toString(16)
                    hexString = hexString.toUpperCase()
                    document.formarithmatic2.result1.value=hexString;
            }
            switch(document.formarithmatic2.base2.value) {
                case "subtraction":
                    decString1 = parseInt(num1, 16);
                    decString2 = parseInt(num2, 16);
                    res = Number(decString1) - Number(decString2);
                    hexString = res.toString(16)
                    hexString = hexString.toUpperCase()
                    document.formarithmatic2.result1.value=hexString;
            }
            break;
        case "binary":
            switch(document.formarithmatic2.base2.value) {
                case "addition":
                    var num1 = parseInt(num1, 2);
                    var num2 = parseInt(num2, 2);
                    res = Number(num1) + Number(num2);
                    var binaryString = convertToBinary(res)
                    document.formarithmatic2.result1.value=binaryString;
            }
            switch(document.formarithmatic2.base2.value) {
                case "subtraction":
                    var num1 = parseInt(num1, 2);
                    var num2 = parseInt(num2, 2);
                    res = Number(num1) - Number(num2);
                    var binaryString = convertToBinary(res)
                    document.formarithmatic2.result1.value=binaryString;
            }
            break;
    }
}
function calculate6() {
    var num1, num2, res;
    num1=(document.formarithmatic3.number1.value)
    num2=(document.formarithmatic3.number2.value)
    switch (document.formarithmatic3.base1.value) {
        case "decimal":
            switch(document.formarithmatic3.base2.value) {
                case "addition":
                    res = Number(num1) + Number(num2);
                    document.formarithmatic3.result1.value=res;
            }
            switch(document.formarithmatic3.base2.value) {
                case "subtraction":
                    res = Number(num1) - Number(num2);
                    document.formarithmatic3.result1.value=res;
            }
            break;
        case "hex":
            switch(document.formarithmatic3.base2.value) {
                case "addition":
                    decString1 = parseInt(num1, 16);
                    decString2 = parseInt(num2, 16);
                    res = Number(decString1) + Number(decString2);
                    hexString = res.toString(16)
                    hexString = hexString.toUpperCase()
                    document.formarithmatic3.result1.value=hexString;
            }
            switch(document.formarithmatic3.base2.value) {
                case "subtraction":
                    decString1 = parseInt(num1, 16);
                    decString2 = parseInt(num2, 16);
                    res = Number(decString1) - Number(decString2);
                    hexString = res.toString(16)
                    hexString = hexString.toUpperCase()
                    document.formarithmatic3.result1.value=hexString;
            }
            break;
        case "binary":
            switch(document.formarithmatic3.base2.value) {
                case "addition":
                    var num1 = parseInt(num1, 2);
                    var num2 = parseInt(num2, 2);
                    res = Number(num1) + Number(num2);
                    var binaryString = convertToBinary(res)
                    document.formarithmatic3.result1.value=binaryString;
            }
            switch(document.formarithmatic3.base2.value) {
                case "subtraction":
                    var num1 = parseInt(num1, 2);
                    var num2 = parseInt(num2, 2);
                    res = Number(num1) - Number(num2);
                    var binaryString = convertToBinary(res)
                    document.formarithmatic3.result1.value=binaryString;
            }
            break;
    }
}
function convertToBinary(x) {
    let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    return (`${bin}`);
}

function hex2bin(hex){
    return (parseInt(hex, 16).toString(2)).padStart(8, '0');
}
function decimalToHex(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
        hex = "0" + hex;
    }

    return hex;
}