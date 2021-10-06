let entrada = parseInt(gets());
var condicao=entrada;
var n1=0,n2=0, n5=0, n10=0, n20=0, n50=0, n100=0;

while(condicao!==0){
    if(entrada/100>=1){
        n100 = parseInt(condicao/100);
        condicao= condicao-(n100*100);
    }
    if(condicao/50>=1){
        n50 = parseInt(condicao/50);
        condicao= condicao-(n50*50);
    }

    if(condicao/20>=1){
        n20 = parseInt(condicao/20);
        condicao= condicao-(n20*20);
    }
    if(condicao/10>=1){
        n10 = parseInt(condicao/10);
        condicao= condicao-(n10*10);
    }
    if(condicao/5>=1){
        n5 = parseInt(condicao/5);
        condicao= condicao-(n5*5);
    }
    if(condicao/2>=1){
        n2 = parseInt(condicao/2);
        condicao= condicao-(n2*2);
    }
    if(condicao/1>=1){
        n1 = parseInt(condicao/1);
        condicao= condicao-(n1*1);
    }
}
console.log(entrada);
console.log(`${n100} nota(s) de R$ 100,00`);
console.log(`${n50} nota(s) de R$ 50,00`);
console.log(`${n20} nota(s) de R$ 20,00`);
console.log(`${n10} nota(s) de R$ 10,00`);
console.log(`${n5} nota(s) de R$ 5,00`);
console.log(`${n2} nota(s) de R$ 2,00`);
console.log(`${n1} nota(s) de R$ 1,00`);

