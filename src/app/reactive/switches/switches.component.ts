import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario : FormGroup = this.fb.group({
    genero:['M',Validators.required],
    notificaciones:[true,Validators.required],
    terminos:[false,Validators.requiredTrue],
  });

  persona = {
    genero:'F',
    notificaciones:false
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({...this.persona});

    this.miFormulario.valueChanges.subscribe(form => {
      delete form.terminos;
      this.persona = form; 
    })
  }


  guardar(){
    const formValue =  {...this.miFormulario.value};
    delete formValue.notificaciones;

    this.persona = formValue;
  }
}
