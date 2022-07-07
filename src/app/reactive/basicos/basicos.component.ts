import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit  {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 4080 ti'),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(5)
  // })

  miFormulario : FormGroup = this.fb.group({  //builder
    nombre : [, [Validators.required, Validators.minLength(3)]],  //requerido , minimo 3 letras
    precio : [, [Validators.required,Validators.min(0)]],
    existencias : [,[Validators.required,Validators.min(0)]]
  })

  constructor( private fb:FormBuilder) { }

  ngOnInit() {
    this.miFormulario.reset({
      nombre:'RTX 4080ti',
      precio:1600
    })
  }

  campoValido(campo:string){   //errores 
     return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }
  guardar(){
    if(this.miFormulario.invalid){      //si no llega ninguna casilla te marca el error en todos los inputs
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();  //limpia al guardar
  }

}
