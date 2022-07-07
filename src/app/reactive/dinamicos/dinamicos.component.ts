import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray ,FormControl} from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  miFormulario : FormGroup = this.fb.group({
    nombre : ['',[Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      [ 'Metal Gear', Validators.required ],
      [ 'Death Stranding',Validators.required  ],
    ], Validators.required)
  });

  nuevoFavorito : FormControl = this.fb.control('',Validators.required);

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  } 

  constructor(private fb:FormBuilder) { }

  // ngOnInit(): void {
  //   this.miFormulario.reset({
  //     nombre:'Cristhian Pedro'
  //   })
  // }
  agregarFavorito(){
    if(this.nuevoFavorito.invalid){return}

    this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }
 
  campoValido(campo:string){
    return this.miFormulario.controls[campo].errors && 
           this.miFormulario.controls[campo].touched;
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return
    }
    // console.log(this.miFormulario.value);
    // this.miFormulario.reset();
  }


  borrar(i : number){  // eliminar indice o i
    this.favoritosArr.removeAt(i);
  }
}
