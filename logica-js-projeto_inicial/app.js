alert("Bem Vindo ao Jogo Dos Numeros Secretos");
let numberMaximo = 1000
let numberSecret = parseInt(Math.random()*numberMaximo+1);
console.log(numberSecret);
 let chute;
let tentativas = 1 ;

 // enquanto o numero secreto nao for igual
 while(chute != numberSecret) {
    chute =  prompt( "Escolha um numero entre 1 e " + numberMaximo);
    if(numberSecret == chute ) {
        break;
    } else {
        if(chute> numberSecret) {
            alert(`o numero secreto é menor que ${chute}`);
        } else {
            alert(`o numero secreto é maior que ${chute}`);
        }
        //tentativas = tentatavias +1;
        tentativas++
    }

 }
  
 let palavraTentativas = tentativas > 1 ? 'tentativas.' : 'tentativa.';
 alert(`Isso ai!! Voce acertou o numero secreto ${numberSecret} com ${tentativas} ${palavraTentativas} `)
 
 //if(tentativas < 2  ){
 //   alert(`Isso ai!! Voce acertou o numero secreto ${numberSecret} com ${tentativas} tentativa. `);
// }else {
 //   alert(`Isso ai!! Voce acertou o numero secreto ${numberSecret} com ${tentativas} tentativas. `);
//}
 


