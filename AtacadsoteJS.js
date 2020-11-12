tela = screen.width

boxs = document.querySelector("#cart-total");

boxs.addEventListener('DOMSubtreeModified', calculaQuantidade);

document.addEventListener('DOMContentLoaded', calculaQuantidade);

whatsIcon = document.querySelector(".whatsapp_icon").firstChild;

linkWhats = whatsIcon.getAttribute("href")

carrinho = true


body = document.querySelector("body");
QuantidadeC = document.createElement("P")
PrecoTotalC = document.createElement("P")
PrecoTotalDescontoC = document.createElement("P")
QuantidadeC .classList.add("QuantidadeC", "nones")
PrecoTotalC.classList.add("PrecoTotalC", "nones")
PrecoTotalDescontoC.classList.add("PrecoTotalDescontoC", "nones")
body.appendChild(QuantidadeC)
body.appendChild(PrecoTotalC)
body.appendChild(PrecoTotalDescontoC)

Qt = document.querySelector(".QuantidadeC")
Pt = document.querySelector(".PrecoTotalC")
Pdt = document.querySelector(".PrecoTotalDescontoC")

function calculaQuantidade(){
    if(tela <= 767){
        var box = document.querySelector(".cart-quantity-items");
        var quantidadeCarrinh = document.querySelector(".cart-quantity-items").textContent;
        var quantidadeCarrinho = Number(quantidadeCarrinh);

    }else{
        var box = document.querySelector("#cart-total");
        var quantidade = box.textContent
        var res = quantidade.match(/^[\s]?\d*/g);
        var quantidadeCarrinho = Number(res[0]);
        
    }
    Qt.textContent = quantidadeCarrinho;

    CalculoPreco(quantidadeCarrinho)

    console.log("1")

}



function CalculoPreco(quantidadeCarrinho){
    boxpreco = document.querySelector("#cart-total").textContent;
    precos = boxpreco.match(/\d+.?\d?[,|.]\d+/gm);
    console.log("deu")
    t1 = /[.?]/gm
    t2 = ``
    precoReall = precos[0].replace(t1,t2);
    t3 = /[,]/gm
    t4 = `.`
    precoReal = precoReall.replace(t3,t4);

    Pt.textContent = precoReal.toString();

        if(quantidadeCarrinho < 10){
            var desconto = 0
        }

        if (quantidadeCarrinho >= 10 && quantidadeCarrinho< 20 )  {
            var desconto = 7
         }
         
         if (quantidadeCarrinho >= 20)  {
             var desconto = 10
         }
     
    CalculoPrecoDesconto(Number(precoReal), desconto, quantidadeCarrinho)
    console.log("ripo", Number(precoReal))
    
    console.log("2")

}

function CalculoPrecoDesconto(valor, desconto, quantidadeCarrinho){
    PrecoDesconto = (valor / 100 * (100 - desconto)).toFixed(2)
    console.log(valor)
    console.log(desconto)
    console.log(PrecoDesconto)
    Pdt.textContent = PrecoDesconto
    quantidadeCarrinhoAlert = quantidadeCarrinho
    criaAlerta(quantidadeCarrinhoAlert)
    atualizarValores(desconto)
    console.log("3")
}


function criaAlerta(quantidadeCarrinho){

    if (quantidadeCarrinho >= 10 && quantidadeCarrinho < 20 )  {
        exibeAlerta("10","7%")
    }
    
    if (quantidadeCarrinho >= 20 && quantidadeCarrinho < 30 )  {
        exibeAlerta("20","10%")
    }
    
    if (quantidadeCarrinho >= 30){
        fecharAlerta()
        let bodyalert = document.querySelector("body");
        let alerta = document.createElement("DIV");
        alerta.classList.add("alert")
        alerta.classList.add("alerta-desconto")
        alerta.innerHTML +=`<i class="fa fa-close fecharAlerta" style="position: absolute;right: 10px;top: 10px;" onclick="fecharAlerta()"></i>
        <div style="
        width: 10%;
        display: inline;
    "><i class="fa fa-whatsapp" style="margin-right: 5px;display: inline;font-size: 40px;"></i></div><div style="
        display: inline-block;
        width: 90%;
        padding-left: 20px;
        padding-right: 15px;
    "><span style="display:block;font-size: 15px;text-transform: uppercase;font-weight: inherit;">Você ultrapassou 30 peças</span>
    <span style="display:block;font-size: 13px;"><a href="`+linkWhats+`" style=" text-decoration: underline; color: #19772a; ">Entre em contato para um desconto especial</a></span></div>`
        bodyalert.appendChild(alerta)
    }
    console.log("3.1")
}


function fecharAlerta(){
    let bodyalert = document.querySelector("body");
    let alerta = document.querySelector(".alerta-desconto")
    if(alerta != null){
    bodyalert.removeChild(alerta);
    }
}



function exibeAlerta(quantidade,desconto){
    fecharAlerta()
    let body = document.querySelector("body");
    alerta = document.createElement("DIV");
    alerta.classList.add("alert")
    alerta.classList.add("alerta-desconto")
    alerta.innerHTML +=`<i class="fa fa-close fecharAlerta" style="position: absolute;right: 10px;top: 10px;" onclick="fecharAlerta()"></i>
    <div style="
    width: 10%;
    display: inline;
"><i class="fa fa-percent" style="margin-right: 5px;display: inline;font-size: 40px;"></i></div><div style="
    display: inline-block;
    width: 90%;
    padding-left: 20px;
    padding-right: 15px;
"><span style="display:block;font-size: 15px;text-transform: uppercase;font-weight: inherit;">Você ultrapassou `+quantidade+` peças</span><span style="display:block;font-size: 13px;">Você ganhou um desconto de `+desconto+`</span></div>`
    body.appendChild(alerta)
}


function atualizarValores(desconto){

    if(tela > 767){

        attQt = document.querySelector(".QuantidadeC").textContent
        attaPt = document.querySelector(".PrecoTotalC").textContent
        attPdt = document.querySelector(".PrecoTotalDescontoC").textContent

        attQuantidade = document.querySelector("#quantidade");
        attPrecoTotal = document.querySelector("#precototal");
        attDesconto = document.querySelector("#desconto");

        attQuantidade.textContent = attQt + " ITEM(s)"
        attPrecoTotal.textContent = " R$ " + attPdt + "  "

        dropdown = document.querySelector(".dropdown-menu");
        dropdownInt = dropdown.querySelectorAll("li");
        dropdownInt2 = dropdownInt[1].querySelectorAll("strong");
        dropdownInt2[1].textContent = " R$ " + attPdt
        
        if(desconto > 0){
            attDesconto.textContent = "Desconto de "+ desconto +"% Aplicado";
        }else{
            attDesconto.textContent = "";
        }

    }

    if(window.location.href.indexOf("carrinho") != -1){
        blocoPrecoCar = document.querySelector("#text_cart_total_order");
        bs = blocoPrecoCar.querySelectorAll("b");
        bs[1].textContent = " R$ " + attPdt
    }
    console.log("3.2")

}



function PrecoEItems(){
    carrinhoBloco = document.querySelector("#my-cart")
    blocoPreco = document.createElement("DIV");
    blocoPreco.innerHTML = `<span id="quantidade" style="
    font-size: 12px;
    text-align: left;
    font-weight: 800;
"></span><span id="precototal" style="
    font-size: 12px;
    text-align: left;
    font-weight: 800;
"></span><i class="fa fa-angle-down"></i><span id="desconto" style="
    display: block;
    font-size: 10px;
    text-align: left;
    color: #009c08;
    font-weight: bold;
"></span>`
carrinhoBloco.appendChild(blocoPreco)
}


PrecoEItems()


console.log(document.querySelector(".QuantidadeC").textContent,document.querySelector(".PrecoTotalC").textContent,document.querySelector(".PrecoTotalDescontoC").textContent)


t = document.querySelector("#btn-download-product-image")
te = 1
if (te = 1) {

    let detalhesProduto = document.querySelector(".product_details")
    let blocoTabela = document.createElement("DIV");
    blocoTabela.classList.add("col-sm-12", "margem");
    
    let blocoPreco = document.querySelector(".price_attacked");
    let valor = blocoPreco.querySelector("b").textContent;
    let str = valor.replace(/[R][$]/, '');
    let valorNumber = str.replace(/[,]/, '.');
    let valorDef = Number(valorNumber);
    
    
    detalhesProduto.insertBefore(blocoTabela, detalhesProduto.firstChild);
    
    blocoTabela.innerHTML = `<style>
            table, tr, th, td{
                border : 1px solid #6b6b6b;
                text-align: center;
                
            }
            .margem{
                margin-bottom:20px
            }
        </style>
        
        <h3>Desconto Atacarejo</h3>
            <table width="100%">
                    <tbody>
                        <tr align="center">
                            <th>Quantidade</th>
                            <th>Desconto</th>
                            <th>Preço</th>
                        </tr>
                        <tr align="center">
                            <td>6</td>
                            <td>0%</td>
                            <td>R$ ` + valorDef.toFixed(2)  + `</td>
                        </tr>
                        <tr align="center">
                            <td>10</td>
                            <td>7%</td>
                            <td>R$ ` + (valorDef - (valorDef / 100 * 7)).toFixed(2) + `</td>
                        </tr>
                        <tr align="center">
                            <td>20</td>
                            <td>10%</td>
                            <td>R$ ` + (valorDef - (valorDef / 100 * 10)).toFixed(2)+ `</td>
                        </tr>
                    </tbody>
                </table>
                <a href="`+linkWhats+`" target="_blank"><img  style="margin-top:20px;" src="https://i.imgur.com/sAShBs6.jpeg"></a>`
    
}

calculaQuantidade()
