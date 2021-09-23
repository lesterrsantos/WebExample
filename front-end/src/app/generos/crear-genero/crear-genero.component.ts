import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  form: FormGroup = this.formBuilder.group({
    nombre: ''
  });

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {
        Validators: [Validators.required, Validators.minLength(3)]
      }]
    });

  }

  guardarCambios() {
    // guardar cambios
    this.router.navigate(['/generos']);
  }

  obtenerErrorCampoNombre() {
    var campo = this.form.get('nombre');
    if (campo !== null && campo.hasError('required')) {
      return 'El campo nombre es requerido';
    }

    if (campo !== null && campo.hasError('minlength')) {
      return 'La longitud minima es de 3 caracteres';
    }

    return '';
  }

}
