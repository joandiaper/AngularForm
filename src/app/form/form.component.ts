import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { User, UserService } from '../services/userServices';
//import { Product, ProductsService } from '../services/productServices';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  customVal(campo: FormControl) {
    if (campo.value === 'Other') {
      return { error: true };
    }
    else { return null; }
  }

  prohibitName(name: FormControl){
    if (name.value === 'hitler' || name.value === 'Hitler' || name.value === 'HITLER'){
      return { error : true}
    }
    else { return null; }
  }

  nombre: FormControl = new FormControl('', [this.prohibitName, Validators.required]);//Validators.pattern(/^(?!.*hitler).*$/)
  apellido1: FormControl = new FormControl('', [Validators.minLength(2), Validators.maxLength(20), Validators.required]);
  email: FormControl = new FormControl('', [Validators.pattern(/^[a-zA-Z0-9._%+-]{4,20}@[a-zA-Z0-9.-]{4,}\.[a-zA-Z]{2,}$/), Validators.required]);
  edad: FormControl = new FormControl('', [Validators.required]);
  quota: FormControl = new FormControl('', Validators.required);

  MyNewForm: FormGroup = new FormGroup({
    nombre: this.nombre,
    apellido1: this.apellido1,
    email: this.email,
    edad: this.edad,
    quota: this.quota
  });

  resetForm() {
    //this.MyNewForm.reset();
  }

  /*@Output() datosEnviados = new EventEmitter<any>();
  i = 0;

  datos = [
    { nombre: "", apellido1: "", apellido2: "", email: "", plan: "", accept: "", fnacimiento: "", 
    phone: "", IBAN: "", DNI: "" },
    { nombre: "", apellido1: "", apellido2: "", email: "", plan: "", accept: "", fnacimiento: "", 
    phone: "", IBAN: "", DNI: "" },
    { nombre: "", apellido1: "", apellido2: "", email: "", plan: "", accept: "", fnacimiento: "", 
    phone: "", IBAN: "", DNI: "" }
  ]
  enviarDatos() {
    const datosString = JSON.stringify(this.datos); 
    localStorage.setItem('datos', datosString); 
    console.log(datosString)
    this.i++;
  }*/

  ngOnInit() { }
  Clic(datos: FormGroup) {
    /*const datosJSON = JSON.stringify(datos);
    console.log(datosJSON);
    const nombreArchivo = "datos.json";*/
    alert("DATA SENT CONRRECTLY");
    console.log(datos);
  }

  users:User[] = [ ];
  userName: String = "";
  userLastName: String = "";
  userEmail: String = "";
  userAge: String = "";
  userQuota: String = "";
  @ViewChild("it1") name!: ElementRef;
  @ViewChild("it2") lastName!: ElementRef;
  @ViewChild("it3") email2!: ElementRef;
  @ViewChild("it4") age!: ElementRef;
  @ViewChild("it5") quotas!: ElementRef;


  constructor(private userService:UserService){
  }

  public addProduct(){
    this.userService.sendUsers(this.name.nativeElement.value,
                        this.lastName.nativeElement.value,
                        this.email2.nativeElement.value,
                        this.age.nativeElement.value,
                        this.quotas.nativeElement.value
                        );

      console.log(this.users);
  }

}

