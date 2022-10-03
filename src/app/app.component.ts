import { Component } from '@angular/core';
import { Empleado } from 'src/Interfaces/Empleado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MinimarketBelu';
  public Empleado01: Empleado ={
    Id: 1,
    Nombre: "David",
    Apellido: "Siclla",
    Edad: "21",
    Usuario: "Batroz"
  }
  ListaEmp: Empleado[]=[this.Empleado01];
  public empleado:Empleado=this.EmpleadoVacio();
  public posicion: number = -1
  Agregar(): void {
    if(this.posicion == -1){
    this.empleado.Id = this.ListaEmp.length + 1;
    this.ListaEmp.push(this.empleado);
    this.empleado= this.EmpleadoVacio();
    console.log("Hay:",this.ListaEmp.length,"empleados")
    console.table(this.ListaEmp)
    }
    else{
      let selectEmpleado: Empleado =  this.ListaEmp[this.posicion];
      selectEmpleado.Id = this.empleado.Id;
      selectEmpleado.Nombre = this.empleado.Nombre;
      selectEmpleado.Apellido = this.empleado.Apellido;
      selectEmpleado.Edad = this.empleado.Edad;
      selectEmpleado.Usuario = this.empleado.Usuario;
      this.empleado = this.EmpleadoVacio();
      this.posicion = -1;
      console.table(this.ListaEmp)
    }
}
  EmpleadoVacio(): Empleado{
  return{
    Id: 0,
    Nombre:"",
    Apellido:"",
    Edad: "",
    Usuario:""
  };
}
   eliminar(i: number):void{
    this.ListaEmp.splice(i,1);
    console.table(this.ListaEmp)
   }

   editar(i: number):void{
    let selectEmpleado: Empleado =  this.ListaEmp[i];
    this.empleado.Id = selectEmpleado.Id;
    this.empleado.Nombre = selectEmpleado.Nombre;
    this.empleado.Apellido = selectEmpleado.Apellido;
    this.empleado.Edad = selectEmpleado.Edad;
    this.empleado.Usuario = selectEmpleado.Usuario;
    this.posicion = i;
    console.table(this.ListaEmp)
  };
}
