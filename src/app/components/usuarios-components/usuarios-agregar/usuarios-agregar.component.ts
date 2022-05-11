import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/core/services/usuarios.service';

@Component({
  selector: 'app-usuarios-agregar',
  templateUrl: './usuarios-agregar.component.html',
  styleUrls: ['./usuarios-agregar.component.css']
})
export class UsuariosAgregarComponent implements OnInit {
  public formGroup: FormGroup;
  constructor(readonly formBuilder: FormBuilder,
    readonly usuarioService: UsuarioService) {
    this.formGroup = this.initForm();
  }

  ngOnInit(): void {
    this.initForm();

  }


  initForm(): any {
    return this.formGroup = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      correoPersonal: ['', Validators.required],
      correoCorporativo: ['', Validators.required],
      grupo: ['', Validators.required],
      rol: ['', Validators.required],
      nombreEmergencia: ['', Validators.required],
      numeroEmergencia: ['', Validators.required]
    });
  }



  createEntitySave(): any {
    const data = {
      'nombre': this.formGroup.value.nombre,
      'apellido': this.formGroup.value.nombre,
      'telefono': this.formGroup.value.nombre,
      'correoPersonal': this.formGroup.value.nombre,
      'correoCorporativo': this.formGroup.value.nombre,
      'grupo': this.formGroup.value.nombre,
      'rol': this.formGroup.value.nombre,
      'nombreEmergencia': this.formGroup.value.nombre,
      'numeroEmergencia': this.formGroup.value.nombre,
    };
    console.log(data);
    return data;
  }

  save() {
    this.usuarioService.saveUser(this.createEntitySave()).subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    })
  }
}
