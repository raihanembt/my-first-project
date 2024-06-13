// fonctin de validation du formulaire
function validation(){
    console.log("ok")
    var name=document.getElementById("name").Value
    var modepasse=document.getElementById("modepasse").Value
    let valid=true;
    if(name.Value.trim===""){
        document.getElementById("id-error").textContent="le champs usermane est obligatoire"
        valid=false
    }else{
        document.getElementById("id-error").textContent=""
    }
    if(modepasse.Value.trim===""){
        document.getElementById("id-error").textContent="le champs passeword est obligatoire"
        valid=false
    }else{
        document.getElementById("id-error").textContent=""
    }
    return false 
   
}