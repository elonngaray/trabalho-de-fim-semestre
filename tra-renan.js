function cadastro(){
var nome = window.document.querySelector('input#nomeusuario')
var sobre = window.document.querySelector('input#sobrenome')
var email = window.document.querySelector('input#email')
var senio = document.querySelector('select#senioridade')
var prof = document.getElementsByName('devweb')
var texto = document.querySelector('textarea#experiemcia')
let form = document.querySelector('form#formulario')
var res = window.document.querySelector('div#res')

var nome = String (nome.value)
var sobre = String (sobre.value)
var email = String (email.value)
var senio = String (senio.value)
var texto = String (texto.value)
let tec = ['']
var profissao = ''

    for(i = 0; i < form.length; i++){
        if (form[i].checked) {
            tec = (tec + form[i].value) + ', ' 
        }
    
    }
        
        if(prof[0].checked){
            profissao = 'Front-end'
        }else if(prof[1].checked){
            profissao = 'Back-end'
        }else if(prof[2].checked){
            profissao =  'Fullstack'
        }
        

    res.innerHTML += `<p style="font-size: large;">${nome} ${sobre}, seu cadastro foi emviado para ${email}</p>`
    res.innerHTML += `<form style="font=size: 25px; color: #4682B4;"><p>Nome completo: ${nome} ${sobre}</p><br>
    <p>senioridade: ${senio}</p><br><p>Profissão: ${profissao}</p><p style="color:red;">Voce sabe utilizar a(s) 
    Tecnologia(s): ${tec}
    </p><br><br><p style="color: black;">${texto}</p></form>`
    window.alert(`${nome} ${sobre}, seu cadastro foi emviado para ${email}`)
}