import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/core/services/general.service';

@Component({
  selector: 'app-usuarios-eliminar',
  templateUrl: './usuarios-eliminar.component.html',
  styleUrls: ['./usuarios-eliminar.component.css']
})
export class UsuariosEliminarComponent implements OnInit {


  public idCustomer: any;
  constructor(
    private generalService: GeneralService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.route.params.subscribe(params => this.idCustomer = params['id']);
  }

  eliminar() {
    this.generalService.abrirConfirmacion().subscribe(
      (res: any) => {
        console.log('eliminado');
      }, (err: any) => {
        this.generalService.abrirMensaje('Verificar información', 'error');
      });
  }
}
