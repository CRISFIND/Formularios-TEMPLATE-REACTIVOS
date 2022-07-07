import { Component, OnInit } from '@angular/core';

interface Persona{
  nombre:string;
  favoritos: Favoritos[];
}
interface Favoritos{
  id:number;
  nombre:string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent{

  nuevo : string ='';

  persona:Persona={
    nombre:'Cristhian',
    favoritos:[
      {
        id:1,
        nombre:'Boz'
      },
      {
        id:2,
        nombre:'light'
      }
    ]
  }
  guardar(){
    console.log('formulario posteado')
  }

  eliminar(index: number){
    this.persona.favoritos.splice(index,1);
  }

  agregar(){
    const nuevoFavorito:Favoritos= {
      id:this.persona.favoritos.length + 1,
      nombre: this.nuevo
    }

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevo='';
  }
}
