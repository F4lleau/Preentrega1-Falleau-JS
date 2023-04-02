var n1,n2mn3,resultado;
n1=parseInt(prompt("introduzca un número"));
n2=parseInt(prompt("introduzca un segundo número"));
n3=prompt("introduce un signo");

if (n3=="+"){
    resultado=n1+n2;
}else if(n3=="-"){
    if(n1>n2){
        resultado==n1-n2;
    }else{
        resultado=n2-n1
    }
}else if(n3==="*"){
    resultado=n1*n2;
}else if(n3=="/"){
    if(n1>n2){
        resultado=n1/n2;
    }else{
        resultado=n2/n1
    }
}
