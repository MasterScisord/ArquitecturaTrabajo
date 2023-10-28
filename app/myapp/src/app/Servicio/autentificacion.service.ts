import { Router } from "@angular/router";
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

interface User{
  Rut: string,
  password: string,
}
@Injectable({
  providedIn: 'root'
})


export class AutentificarService {
  public autentificado!: Boolean;
  public local!: Storage;



  constructor(private global: Storage, private router: Router) { 
    this.iniciar();
  }
  async iniciar(){
    const storage = await this.global.create();
    this.local = storage
  }

  async register(Rut: string, password: string){
    const users = await this.local?.get('users') || [];
    const existe = users.find((us:User)=> us.Rut === Rut && us.password === password);
    if (existe){
      console.log("Este Usuario ya existe")
      return true
    } else{
      const nuevo: User = {Rut,password};
      users.push(nuevo);
      await this.local.set('users',users);
      console.log("Registrado Exitosamente")
      return false
    }
  }
  
  async login (username:String, password: String):Promise<Boolean>{
    const users = await this.local.get('users') || [];
    const user = users.find((us:User)=> us.Rut===username && us.password===password);
    if(users){
      this.autentificado = true;
      return true;
    }
    this.autentificado = false;
    return false;
  }

  logout(){
    this.autentificado=false;
    this.router.navigate(['/home']);
  }
}