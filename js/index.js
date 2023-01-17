var nom=document.getElementById('nom')
var errorNom=document.getElementById('errorNom')

var email=document.getElementById('email')
var errorMail=document.getElementById('errorEmail')

var tel=document.getElementById('tel')
var errorTel=document.getElementById('errorTel')

var file=document.getElementById('file')
var errorFile=document.getElementById('errorFile')

var color=document.getElementById('color')
var span=document.querySelector('.color')


var select=document.getElementById('pays')
var spanPays=document.querySelector('.pays')

var mode=document.querySelector('.mode')
var html=document.querySelector('html')


var range=document.getElementById('range')
var poids=document.querySelector('.poids')


var form=document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

       // VALIDATION NOM
    if (nom.value=='') {
        nom.classList.add('is-invalid')
        errorNom.textContent='Ce champ est requis'
    } else if(nom.value.length<8){
        nom.classList.add('is-invalid')
        errorNom.textContent='Ce champ necessite au moins 8 caracteres'
    } else{
        nom.classList.remove('is-invalid')
        nom.classList.add('is-valid')
        errorNom.textContent=''
    }

       // VALIDATION EMAIL
       if (email.value=='') {
        email.classList.add('is-invalid')
        errorMail.textContent='Ce champ est requis'
    } else if(email.value.indexOf('@')==-1){
        email.classList.add('is-invalid')
        errorMail.textContent='Entrer un email valide'
    } else{
        email.classList.remove('is-invalid')
        email.classList.add('is-valid')
        errorMail.textContent=''
    }

        // VALIDATION TELEPHONE
    if (tel.value=='') {
        tel.classList.add('is-invalid')
        errorTel.textContent='Ce champ est requis'
    } else if(tel.value.match(/[6][5-9]{1}[0-9]{1}[ -][0-9]{2}[ -][0-9]{2}[ -][0-9]{2}/g)===null){
        tel.classList.add('is-invalid')
        errorTel.textContent='Entrer un numero de telephone valide'
    } else{
        tel.classList.remove('is-invalid')
        tel.classList.add('is-valid')
        errorTel.textContent=''
    }

      // VALIDATION FICHIER
    if (file.value=='') {
        file.classList.add('is-invalid')
        errorFile.textContent='Ce champ est requis'
    } else{
        var tab=file.value.split('.')
        var extension=tab[tab.length-1]
        var minExt=extension.toLowerCase()
        if (minExt==='png' || minExt==='jpg' || minExt==='jpeg' || minExt==='jif') {
            file.classList.remove('is-invalid')
            file.classList.add('is-valid')
            errorFile.textContent=''
        } else {
            file.classList.add('is-invalid')
            errorFile.textContent='Entrer un fichier de type .png,.jif,.jpeg,.jpg'
        }
    }

        // VALIDATION COULEUR
    if (color.value=='') {
        color.classList.add('is-invalid')
        errorColor.textContent='Ce champ est requis'
    } else if(color.value.match(/[6][5-9]{1}[0-9]{1}[ -][0-9]{2}[ -][0-9]{2}[ -][0-9]{2}/g)===null){
        tel.classList.add('is-invalid')
        errorTel.textContent='Entrer un numero de telephone valide'
    } else{
        tel.classList.remove('is-invalid')
        tel.classList.add('is-valid')
        errorTel.textContent=''
    }
})



color.addEventListener('change',function(e) {
    e.preventDefault()
    span.textContent=this.value
})



select.addEventListener('change',function(e) {
    e.preventDefault()
    spanPays.innerHTML="Vous avez choisir <span style='color:red;'></span>"+this.value.toUpperCase()
})
spanPays.textContent="Vous n'avez rien choisi".toUpperCase()



range.addEventListener('change',function(e) {
    e.preventDefault()
    poids.textContent=this.value.toUpperCase()
})
poids.textContent=range.value // par defaut pour prendre les valeur lors du codage


mode.addEventListener('change',function(e){
    e.preventDefault()
    html.setAttribute('data-bs-theme',this.value)
})
