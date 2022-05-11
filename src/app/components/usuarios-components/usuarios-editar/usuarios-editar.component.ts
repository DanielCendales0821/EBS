import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/core/services/usuarios.service';

@Component({
  selector: 'app-usuarios-editar',
  templateUrl: './usuarios-editar.component.html',
  styleUrls: ['./usuarios-editar.component.css']
})
export class UsuariosEditarComponent implements OnInit {

  public formGroup: FormGroup;
  public id = 0;
  public user: any = {};
  constructor(
    readonly formBuilder: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    readonly usuarioService: UsuarioService) {
    this.formGroup = this.initForm();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params['id']);
    this.initForm();
    this.getUser();
  }

  getUser() {
    this.usuarioService.getById('prueba', this.id).subscribe((res: any) => {
      console.log(res);
      this.user = res;
    });
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
