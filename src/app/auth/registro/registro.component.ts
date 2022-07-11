import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nombreTotal, emailPattern, ceferinn } from '../../shared/validators/validaciones';
import { ValidatorService } from '../../shared/validators/validator.service';
import { EmailValidatorsService } from '../../shared/validators/email-validators.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario : FormGroup = this.fb.group({
    nombre:[ '',[Validators.required,Validators.pattern(this.vs.nombreTotal)]],
    email:['',[Validators.required,Validators.pattern(this.vs.emailPattern)],[this.em]],
    // email:[,[Validators.email,Validators.required]],
    username:['',[Validators.required, this.vs.ceferinn]],
    password:['',[Validators.required, Validators.minLength(6)]],
    password2:['',[Validators.required]]
  },
  {
    validators : [this.vs.campos('password','password2')]
  })

  get emails():string{
    const errors = this.miFormulario.get('email')?.errors;
    if(errors?.['required']){
      return 'Email es requerido';
    }
    else if (errors?.['pattern']){
      return 'Formato equivocado';
    }
    else if(errors?.['emailTomado']){
      return 'Email tomado'
    } 
    return '';
  }

  constructor(private fb:FormBuilder, private vs: ValidatorService, private em:EmailValidatorsService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Cristhian Espiritu',
      email:'test1@test.com',
      username:'GatoMaincra',
      password:'1234567',
      password2:'1234567'
    })
  }

  campoValido(campo:string){
    // return this.miFormulario.controls[campo].errors && 
    //        this.miFormulario.controls[campo].touched;
    return this.miFormulario.get(campo)?.invalid &&
           this.miFormulario.get(campo)?.touched;
  }
  // emailRequired(){
  //   return this.miFormulario.get('email')?.errors?.['required'] &&
  //          this.miFormulario.get('email')?.touched;
  // }
  // formato(){
  //   return this.miFormulario.get('email')?.errors?.['pattern'] &&
  //          this.miFormulario.get('email')?.touched;
  // }
  // tomado(){
  //   return this.miFormulario.get('email')?.errors?.['emailTomado'] &&
  //          this.miFormulario.get('email')?.touched;
  // }

  guarda(){
    // this.miFormulario.reset(); solo estoy reseteando mas no recbiendo la informacion
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
   }
}
