import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { toBase64 } from '../utilidades';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent implements OnInit {

  constructor() { }

  imagenBase64: string = '';

  @Input()
  urlImagenActual: string = '';

  @Output()
  archivoSeleccionado: EventEmitter<File> = new EventEmitter<File>();

  ngOnInit(): void {
  }

  changeImage(event: any){
    if (event.target.files.length > 0){
      const file: File = event.target.files[0];
      toBase64(file).then((value: any) => {
        return this.imagenBase64 = value;
      })
      .catch((error: any) => console.log(error));
      this.archivoSeleccionado.emit(file);
      this.urlImagenActual = '';
    }
  }

}
