'use strict';

const task1Button = document.getElementById("task1");
if (task1Button) {
    task1Button.onclick = function() {
        console.log("Hello, World!");
        alert("Hello, World!");
        const name = prompt("Whats your name?");
        alert(`Hey, ${name || 'Anonimus'}!`);
    };
}

const task2Button = document.getElementById("task2");
if (task2Button) {
    task2Button.onclick = function() {
        let a = parseFloat(prompt("First number:"));
        let b = parseFloat(prompt("Second number:"));
        if (isNaN(a) || isNaN(b)) {
            console.log("No numbers");
            alert("No numbers");
        } else {
            const sum = a + b;
            const difference = a - b;
            const product = a * b;
            const quotient = b !== 0 ? (a / b) : "Quotient to the 0 - imposible";

            console.log(`Sum: ${sum}`);
            console.log(`Difference: ${difference}`);
            console.log(`Product: ${product}`);
            console.log(`Quotient: ${quotient}`);
            alert(`Sum: ${sum}. Difference: ${difference}. Product: ${product}. Quotient: ${quotient}`);
        }
    };
}

const task3Button = document.getElementById("task3");
if (task3Button) {
    task3Button.onclick = function() {
        let age = parseInt(prompt("What's your age?"))
        if (isNaN(age)) {
            alert("No age");
        } else if (age > 18) {
            alert("Ласкаво просимо!");
        } else {
            alert("Вхід заборонено");
        }
    };
}

const task4Button = document.getElementById("task4");
if (task4Button) {
    task4Button.onclick = function() {
        for (let i = 1; i <= 10; i++) {
            console.log(i);
        }
        let sum = 0;
        for (let j = 1; j <= 100; j++) {
            sum += j;
        }
        console.log("Sum with 1 to 100 is: " + sum);
    };
}

const task5Button = document.getElementById("task5");
if (task5Button) {
    task5Button.onclick = function() {
        function calculateSum(a, b) {
            if (isNaN(a) || isNaN(b)) {
                console.log("Not a numbers");
            } else {
                console.log(`${a} + ${b} = ${a+b}`)
            }
        }

        calculateSum(5, 10);
        calculateSum("sorry", 0);
        calculateSum(4, 3456785);
        calculateSum(-4, 10);
        calculateSum(5.7, 10);
    };
}