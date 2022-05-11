import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private spinner: NgxSpinnerService) {
  }

  public abrirSpinner() {
    this.spinner.show();
  }

  public cerrarSpinner() {
    this.spinner.hide();
  }

  public abrirConfirmacion(): any {
    const observable = new Observable(observer => {
      Swal.fire({
        title: '¿Está seguro?',
        text: '',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: '¡Cancelar!',
        confirmButtonText: '¡Confirmar!'
      }).then((result) => {
        if (result.value) {
          observer.next(true);
        }
      });
    });
    return observable;
  }

  abrirMensaje(msg:any, type:any) {
    let title = 'Mensaje';
    if (type === 'success') {
      title = '!Buen trabajo!';
    } else {
      title = 'Error';
    }
    Swal.fire(
      title,
      msg,
      type
    );
  }

}
