function  ValidaCpf(){

}

ValidaCpf.prototype.Evento=function evento() {
    this.conteiner=document.querySelector('.conteiner')
    document.addEventListener('submit',e =>{
        e.preventDefault();
        this.InputCpf=document.querySelector('.InputCpf')
        this.TratarNumero(String(this.InputCpf.value));
    })
    
};

ValidaCpf.prototype.TratarNumero=function (inputCpf) {
    this.CpfOriginal=inputCpf;
    this.cpfArray= Array.from(this.CpfOriginal.replace(/\D/g, ''));
    this.cpfArrayCopy=[...this.cpfArray].slice(0,-2);
    this.Soma(this.cpfArrayCopy);
}
ValidaCpf.prototype.Soma=function(Array) {
    let contador10=10;
    let contador11=11;

    this.somaMulti=Array.reduce((ac,valor)=>{
    if(Array.length===9){
    ac.push(Number(valor)*contador10);
    contador10--;
    return ac
}

    if(Array.length===10){
    ac.push(Number(valor)*contador11);
    contador11--;
    return ac
    };
   
},[]).reduce((ac, valor)=> ac+=valor);
this.Desfrag(this.somaMulti);
   
}


 ValidaCpf.prototype.Desfrag=function(numero) {
    this.numero= 11 - numero%11 < 9 ? 11 - numero%11 : 0;
    this.inserir(this.numero);
 }

ValidaCpf.prototype.inserir=function(numero) {
    this.cpfArrayCopy.push(String(numero))
    if (this.cpfArrayCopy.length===10){ 
    return this.Soma(this.cpfArrayCopy)
};
    return this.Validação(this.cpfArrayCopy);
    
    
}

ValidaCpf.prototype.Validação=function(array) {
   this.resultado=array.join()===this.cpfArray.join() ? 'CPF VÁLIDO': 'CPF INVÁLIDO';
    this.setResultado(this.resultado)
}

ValidaCpf.prototype.setResultado=function(resultado) {
    this.resultado=document.querySelector('.resultado')
    this.resultado.innerHTML=resultado;
    
}



const Cpf= new ValidaCpf(this.InputCpf);
Cpf.Evento();
