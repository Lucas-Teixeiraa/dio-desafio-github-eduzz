let quantidadePositivos = 0;

for (let i = 0; i < 6; i++) {

  const valorInformadoPeloUsuario = gets();

 if(valorInformadoPeloUsuario >0){
   quantidadePositivos++;
 }

}

console.log(`${quantidadePositivos} valores positivos`);