var altura = 5;


for (contador = 1; contador <= altura ; contador = contador + 1 ){

    var linha = " ";

    for (asteristico = 5; asteristico >= contador; asteristico = asteristico - 1 ){
        
        linha += "*"
    }

    alert (linha);
    console.log(linha);

}