import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!:NgForm;

  init = {
    producto:'RTX 4080ti',
    precio:1000,
    existencias:10
  }

  constructor() { }

  ngOnInit(): void {
  }

  precioValido(): boolean{
    return this.miFormulario?.controls['precio']?.touched &&
           this.miFormulario?.controls['precio']?.value < 0;
          //  this.miFormulario?.controls['precio']?.invalid
          //min="0"
           
  }

  nombreValido():boolean{
    return this.miFormulario?.controls['producto']?.invalid &&
           this.miFormulario?.controls['producto']?.touched
}

  // guardar(miFormulario : NgForm){
  guardar(){
    // console.log(this.miFormulario)
    this.miFormulario.resetForm({
      producto:'Algo',
      precio:0,
      existencias:0
    });
  }
}
