let a = 20

let b = 80

let c = 10

function somar(a, b) {
    return a + b
}

console.log(somar(a, b))

const somar2 = function (a=30,b=20,c=10) {
        return a + b + c
       
}

console.log(somar2(b=50)) 

const somar3 = (x = 50, y=80) => { return x + y}

console.log(somar3(x=20, y=70)) // nao sao os mesmos parametros que os anteriores, mas tem o mesmo nome
