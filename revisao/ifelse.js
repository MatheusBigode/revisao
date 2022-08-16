bk = 10

if (bk <= 35){
    desc = bk - ( bk * 0.05 )
    num1 = desc.toFixed(2)
    console.log(`Seu hamburger custou R$ ${bk}. Você recebeu um desconto de 5%, logo seu lanche custou R$${num1}`)
    
} else if (bk > 35 && bk < 45){
    descBig = bk - (bk * 0.1)
    num2 = descBig.toFixed(2)
    console.log(`Seu hamburger custou R$ ${bk}. Você recebeu um desconto de 10%, logo seu lanche custou R$${num2}`)

} else if (bk > 45) {
    descGG = bk - (bk * 0.15)
    num3 = descGG.toFixed(2)
    msg = console.log(`Seu hamburger custou R$ ${bk}. Você recebeu um desconto de 15%, logo seu lanche custou R$${num3}`)
}