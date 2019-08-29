function calc(){
    let myNumber = parseFloat(document.getElementById('input-number').value);
    let myNewNumber = 0;
    let exp = 1;

    do{
        exp ++;
    }while(Math.pow(10, exp) < myNumber);

    for(let i = 1; i <= exp; i ++){
        let div = Math.pow( 10, i );

        let n = myNumber % div;

        n -= myNumber % Math.pow(10, (i - 1));

        n /= Math.pow(10, i - 1);

        n *= Math.pow(10, (exp - i));

        myNewNumber += n;
    }

    document.getElementById('input-result').value = myNewNumber;
}