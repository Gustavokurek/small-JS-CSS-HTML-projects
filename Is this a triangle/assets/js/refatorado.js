class IsTriangulo{
    constructor(){
        this.form=document.querySelector('.form')
        this.evento();
    }

    evento(){
        this.form.addEventListener('submit', e=>{
            this.hendleSubmitt(e);
        })
    }

    hendleSubmitt(e){
        e.preventDefault();
        this.verificandoLados();
        this.étriangulo();
    }

    étriangulo(){
        this.Inputlado1=this.form.querySelector('.lado1');
        this.Inputlado2=this.form.querySelector('.lado2');
        this.Inputlado3=this.form.querySelector('.lado3');

        const lado1= Number(this.Inputlado1.value);
        const lado2= Number(this.Inputlado2.value);
        const lado3= Number(this.Inputlado3.value);

        for(const checkErro of this.form.querySelectorAll('.bad')){
            checkErro.remove();
        };        
        for(const checkErro of this.form.querySelectorAll('.certo')){
            checkErro.remove();
        };

        const Triangulo= lado1+lado2>=lado3 && lado1+lado3>=lado2 && lado2+lado3>=lado1 && lado1>0 && lado2>0 && lado3>0;
        const equilatero=lado1===lado2 && lado2===lado3;
        const isosceles=lado1===lado2 || lado2==lado3 || lado1===lado3;
        const escaleno=lado1!==lado2 && lado2!==lado3 && lado3!==lado1;

        if(!Triangulo){
         this.setResultado("Isso não é um triângulo", false);
        };
        if(isosceles && isosceles===Triangulo && isosceles!==equilatero){
         this.setResultado("Isso é um triângulo Isósceles", true);
        };         
        if(equilatero && equilatero===Triangulo ){
         this.setResultado("Isso é um triângulo equilátero", true);
        };        
        if(escaleno && escaleno===Triangulo ){
         this.setResultado("Isso é um triângulo escaleno ", true);
        };     
    }
    
    setResultado(msg, évalido){
        const button=this.form.querySelector('.resultado');
        const div=document.createElement('div');
        div.innerHTML=msg;
        if(!évalido){
        div.setAttribute('class', 'bad');
        } else div.setAttribute('class', 'certo');
        button.insertAdjacentElement('afterend', div);
    }

    verificandoLados(){
        for(const checkErro of this.form.querySelectorAll('.check-error')){
            checkErro.remove();
        };
        for(const inputs of this.form.querySelectorAll('.lado')){
            const campo=inputs;
            if(!campo.value){
                this.setarErro(campo, 'Esse campo precisa ser preenchido !!!!');
            }           
            if(campo.classList.contains('lado1')){
                 this.énumber(campo);
            }
            if(campo.classList.contains('lado2')){
                 this.énumber(campo);
            }
            if(campo.classList.contains('lado3')){
                 this.énumber(campo);
            }
        }
    }

    énumber(campo){
        const campoNumber=Number(campo.value);
        const label=campo.previousElementSibling.innerText;
        if( isNaN(campoNumber)){
            this.setarErro(campo, `${label} precisa ser um Numero !!!!`);
        }; 
    };       
    
    setarErro(campo, msg){
        const div=document.createElement('div');
        div.innerText=msg;
        div.setAttribute('class', 'check-error');
        campo.insertAdjacentElement('afterend', div);
    }
};

const Triangulo= new IsTriangulo;
