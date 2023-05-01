    function exer23 (){

        let codigo = Number(document.getElementById('codigo').value)
        let qtde = Number(document.getElementById('qtde').value)
        let unitario

        if ((codigo >=1 ) && (codigo <=10 )){
            unitario = 10
        }
        else if ((codigo >=11 ) && (codigo <=20 )){
            unitario = 15
        }
        else if ((codigo >=21 ) && (codigo <=30 )){
            unitario = 20
        }
        else if ((codigo >=31 ) && (codigo <=40 )){
            unitario = 30
        }
        else{
            unitario = 0 
        }
        if (unitario == 0){
            alert ("Código inválido")
        }
        else {
            let total = unitario * qtde
            if (total < 0){
                alert ("Quantidade negativa")
            }
            else{
                let desconto
                if (total < 250){
                    desconto = total * 5 / 100
                }
                else if (total <= 500){
                    desconto = total * 10 / 100
                }
                else {
                    desconto = total * 15 / 100
                }
                let final = total - desconto

                document.getElementById("unitario").innerHTML = unitario
                document.getElementById("total").innerHTML = total
                document.getElementById("desconto").innerHTML = desconto
                document.getElementById("final").innerHTML = final
            }
        }
    }