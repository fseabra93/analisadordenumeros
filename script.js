let num = document.querySelector("input#fnum")
let lista = document.querySelector("select#flista")
let res = document.querySelector("div#res")
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) == -1){
        return false
    } else {
        return true
    }

}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value)) // adiciona na lista
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = '' //zerar

    } else {
        window.alert('Valor inválido ou já existente na lista!')
    }
    num.value = '' //zerar o campo de digitação
    num.focus()     //levar o cursor para o campo de digitação sem precisar clicar de novo

}

function finalizar(){
    if (valores.length == 0){
        window.alert('Nenhum valor adicionado à lista.')
    } else {
        let total = valores.length

        //pegar maior valor e menor valor
        let maior = valores[0]
        let menor = valores[0]
        for (let pos in valores){
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }

        //pegar a soma
        let soma = 0
        for (pos in valores){
            soma += valores[pos]
        }
        //pegar media
        let media = soma / valores.length

        //imprimir
        res.innerHTML = ''
        res.innerHTML += `<p>Temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O menor valor digitado foi ${menor}.`
        res.innerHTML += `<p>O maior valor digitado foi ${maior}.`
        res.innerHTML += `<p>A soma dos valores digitados é ${soma}.</p>`
        res.innerHTML +=`<p>A média dos valores digitados é ${media}.</p>`
    }






   
}

res.innerHtml = `${n}`

