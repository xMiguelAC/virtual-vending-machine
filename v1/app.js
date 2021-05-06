console.log('conetao jevi');
console.log("%cConexion Establecida!!", "color: green");

// ******************************************

let cuenta = 0;
    // console.log(cuenta);

let devuelta;


let product;
    // console.log(product);


// ******************************************



const account =           document.querySelector('#account');

const inputKeyboard =     document.querySelector('#inputkeyboard');

const order =             document.querySelector('#order');

const cancel =            document.querySelector('#cancel');

const despacho =          document.querySelector('#despacho');

const total =             document.querySelector('#total');

const list  =             document.querySelector('#list');

const error  =            document.querySelector('#error');

const devueltaMsg  =         document.querySelector('#devueltaMsg');


// ******************************************


const MonedaFive =          document.querySelector('#MonedaFive');
    // console.log(MonedaFive);
    // console.log(account.innerHTML = cuenta);

const MonedaTen =           document.querySelector('#MonedaTen');

const MonedaTwentyFive =    document.querySelector('#MonedaTwentyFive');

const PapeletaFifty =       document.querySelector('#PapeletaFifty');

const PapeletaHundred =     document.querySelector('#PapeletaHundred');

const PapeletaTwoHundred =  document.querySelector('#PapeletaTwoHundred');

const PapeletaFiveHundred = document.querySelector('#PapeletaFiveHundred');

// ******************************************


MonedaFive.addEventListener('click', function SumarFive(){
    cuenta = cuenta + 5;
    console.log(cuenta); 
    account.innerHTML = cuenta;
})

MonedaTen.addEventListener('click', function SumarTen(){
    cuenta = cuenta + 10;
    console.log(cuenta);
    account.innerHTML = cuenta;
})

MonedaTwentyFive.addEventListener('click', () => { cuenta = cuenta + 25; console.log(cuenta); account.innerHTML = cuenta })

PapeletaFifty.addEventListener('click', () => { cuenta = cuenta + 50; console.log(cuenta); account.innerHTML = cuenta })

PapeletaHundred.addEventListener('click', () => { cuenta = cuenta + 100; console.log(cuenta); account.innerHTML = cuenta })

PapeletaTwoHundred.addEventListener('click', () => { cuenta = cuenta + 200; console.log(cuenta); account.innerHTML = cuenta })

PapeletaFiveHundred.addEventListener('click', () => { cuenta = cuenta + 500; console.log(cuenta); account.innerHTML = cuenta })



inputKeyboard.addEventListener('input', () => { product = inputKeyboard.value; /*console.log(product);*/ })



// ******************************************



let productos = [

    {
        key: "a1",
        price: 20,
        name: "kola real"
    },

    {
        key: "a2",
        price: 10,
        name: "platanito"
    },

    {
        key: "a3",
        price: 5,
        name: "bolon"
    },

    {
        key: "b1",
        price: 30,
        name: "coca cola"
    },

    {
        key: "b2",
        price: 25,
        name: "lays"
    },

    {
        key: "b3",
        price: 15,
        name: "confle"
    },

    {
        key: "c1",
        price: 40,
        name: "santal"
    },

    {
        key: "c2",
        price: 10,
        name: "galleta de soda"
    },

    {
        key: "c3",
        price: 5,
        name: "cacaito"
    },
]

// console.log(productos[0].key);
// console.log(product);
// console.log(productos.includes(product));

// const resultado = productos.find( compra => {
    //     return compra === product;
    // })
    // console.log(resultado);
    
    // ******************************************
    
    

    document.addEventListener('DOMContentLoaded', function(e){
	    
        for (i = 0; i < productos.length; i++){

            
            let fullProduct = `[${productos[i].key}] ${productos[i].name} de $${productos[i].price}`;
            // console.log(fullProduct);


                const theli = document.createElement('li');

                theli.textContent = fullProduct;

                list.appendChild(theli)
            

            
            
        };
        

    })



    
order.addEventListener('click', function handleOrder (){

    despacho.textContent = " ";
    total.textContent = " ";

    let isExist = false;

    if (cuenta == 0 || product == " "){
        error.textContent = "Error 404: deposite para poder comprar o no deje espacio en blanco";
    }else {
    
    for (i = 0; i < productos.length; i++){

        if (product.toLowerCase() == productos[i].key){

            let isExist = true;

            console.log(isExist ? "hay desa vaina" : "no hay desa vaina")
            console.log(productos[i]);
            // console.log(`usted acaba de pedir un ${productos[i].name} con el precio de ${productos[i].price}`);
            // console.log(`total: ${cuenta} - ${productos[i].price} = ${(cuenta - productos[i].price)}`);
            
            if (cuenta < productos[i].price){
                error.textContent = "Error 405: no hay suficiente cualto";
            }else{

            despacho.innerHTML = `un ${productos[i].name} de RD$ ${productos[i].price}`;
            total.innerHTML = `${cuenta} - ${productos[i].price} = ${(cuenta - productos[i].price)}`;

          
            cuenta = cuenta - productos[i].price;
            account.innerHTML = cuenta;

            }
        }
    }
}
        
        // FALTAN EL MARGEN DE ERRORES

    

  
    // if (product == productos[1].key){
    //     console.log('hay deso en la maquina');
    //     document.querySelector('#despacho').innerHTML = "Felicidades, pol fin hay"
    // } else {
    //     console.log('lo sentimo pero te atracamo');
    //     document.querySelector('#despacho').innerHTML = "No hay xd"
    // }
})




cancel.addEventListener('click', function Devolver(){

    if(cuenta == 0){
        error.textContent = "No hay na pa devolvete"
    } else {
        total.textContent = "0";
        devueltaMsg.textContent = " ";
        despacho.textContent = `se le han devuelto $${cuenta}`;

        payback(cuenta);

        cuenta = 0;
        console.log('la cuenta esta en: ', cuenta);
        account.innerHTML = cuenta;
    }
})





function payback () {
    let coinx = cuenta;
    var importe=parseInt(coinx);
 
    // devueltaMsg.innerHTML = "El cambio de la cantidad "+importe;
    
    // indicamos todas las monedas posibles
    // var monedas=Array(500, 200, 100, 50, 20, 10, 5, 2, 1);
    var monedas=Array(500, 200, 100, 50, 25, 10, 5);
    
    // creamos un array con la misma cantidad de monedas
    // Este array contendra las monedas a devolver
    var cambio=Array(0,0,0,0,0,0,0);
    
    // Recorremos todas las monedas
    for(var i=0; i<monedas.length; i++)
    {
    
        // Si el importe actual, es superior a la moneda
        if(importe>=monedas[i])
        {
    
            // obtenemos cantidad de monedas
            cambio[i]=parseInt(importe/monedas[i]);
    
            // actualizamos el valor del importe que nos queda por didivir
            importe=importe-(cambio[i]*monedas[i]);
        }
    }
    
    // Bucle para mostrar el resultado
    for(i=0; i<monedas.length; i++)
    {
        if(cambio[i]>0)
        {

            let fullBack = `${cambio[i]} de: ${monedas[i]}`;

                const theli = document.createElement('li');
                theli.textContent = fullBack;
                devueltaMsg.appendChild(theli)


            //document.write("Hay: "+cambio[i]+" monedas de: "+monedas[i]+" &euro;<br>");
            // devueltaMsg.textContent = "Hay: "+cambio[i]+" monedas de: "+monedas[i]+" &euro;<br>";

        }
    }
};


