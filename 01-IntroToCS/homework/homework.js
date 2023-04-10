'use strict';

function BinarioADecimal(num) {
   // Necesito las posiciones => RECORDAR que son de derecha a izquierda
   // elevar la base por 2 (porque trabajamos en binario) a las pocisiones
   // el resultado de la potencia lo multiplicamos por el numero binario
   // sumamos los resultados de todos los calculos respectivos a su posicion
   
   let indice = 0;
   let posicion = 0;
   for (let i = num.length - 1; i >= 0; i--) {
     let digito = parseInt(num[i]);
     let calculo = digito * Math.pow(2, posicion);
      indice += calculo;
      posicion++;
   }
   return indice;
}

function DecimalABinario(num) {
   // dividir por 2
   // el resultado dividirlo por 2 hasta que ya no se pueda
   // juntamos los restos de abajo hacia arriba (deracha a izquierda)
   let resultado = "";
   while (num>0) {
      resultado = (num % 2) + resultado;
      num = Math.floor(num / 2)
   }
   return resultado;
};

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
