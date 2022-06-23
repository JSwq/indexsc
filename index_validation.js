/*VALIDACIÓN DE DATOS*/

class AccessValidation{
    constructor(email,clave){
        this.email = email;
        this.password = clave;
        this.flag;
    }

    AccoutSearch(){
       window.location.href = "https://jswq.github.io/Formulario_sc19/formulario.html";
       alert(`Serás dirigido a la pagina de formulario`);
    }
}
/* CAPTURA DATOS PAGINA INDEX*/
function CaptureDataIndex(){
    email = document.getElementById("floatingInput").value;
    clave = document.getElementById("floatingPassword").value;
    const data = new AccessValidation(email,clave);
    data.AccoutSearch();
}
/*CAPTURA DATOS FORMULARIO DE REGISTRO */
function CaptureDataRegistro(){
    New_name  = document.getElementById("firstName").value;
    firtsname = document.getElementById("lastName").value;
    Username  = document.getElementById("username").value;
    New_email = document.getElementById("email").value;
    password  = document.getElementById("address").value;

    /* VARIABLE CONSTRUCTOR*/
    const register_new = new NewUser(New_name,firtsname,Username,New_email,password);
    register_new.NewAccout();

}


/*Recibir datos de los inputs // INDEX*/
    let email;
    let clave;
/*INDEX, VALIDACION Y COMPROBACION DE CUENTA*/
/*FORMATO DE REGISTRO*/
class NewUser{
    constructor(New_name,firtsname,Username,New_email,password){
        this.nombre = New_name;
        this.apellido = firtsname;
        this.Username = Username;
        this.email_registro = New_email;
        this.clave = password;
    }

    NewAccout(){
        emails.push(this.email_registro);
        passwords.push(this.clave);
        alert(`Se ha registrado correctamente`);
    }
}

    /*VARIABLES CAPTURA DE DATOS*/
    let New_name;
    let firtsname;
    let Username;
    let New_email;
    let password;

    /* ARREGLOS DE CUENTAS*/
    let emails    = [`joshua.wbe@outlook.com`,`prueba@example.com`,`leonardo@example.com`, `Ismael@example.com`];
    let passwords = [`JoshuaPro`,`prueba123`,`prueba:)`, `Ismael@example.com`];