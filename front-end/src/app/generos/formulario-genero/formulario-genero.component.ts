import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { EventEmitter } from '@angular/core';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.css']
})
export class FormularioGeneroComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup = this.formBuilder.group({
    nombre: ['', {
      Validators: [Validators.required, Validators.minLength(3), primeraLetraMayuscula()]
    }]
  });

  @Input()
  modelo: generoCreacionDTO = {nombre: 'Drama'};


  @Output()
  submit: EventEmitter<generoCreacionDTO> = new EventEmitter<generoCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {
        validators: [Validators.required, Validators.minLength(3), primeraLetraMayuscula()]
      }]
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }

  }

  guardarCambios() {
    this.submit.emit(this.form.value);
  }

  obtenerErrorCampoNombre() {
    var campo = this.form.get('nombre');
    if (campo !== null && campo.hasError('required')) {
      return 'El campo nombre es requerido';
    }

    if (campo !== null && campo.hasError('minlength')) {
      return 'La longitud minima es de 3 caracteres';
    }

    if (campo !== null && campo.hasError('primeraLetraMayuscula')) {
      return campo.getError('primeraLetraMayuscula').mensaje;
    }

    return '';
  }


}
