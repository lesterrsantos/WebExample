import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup = this.formBuilder.group({
    nombre: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    fechaNacimiento: '',
    foto: '',
    biografia: ''
  });

  @Output()
  submit: EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>();

  @Input()
  modelo: actorDTO = {
    nombre: '',
    fechaNacimiento: new Date(),
    foto: ''
  };

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      fechaNacimiento: '',
      foto: '',
      biografia: ''
    });

    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo)
    }
  }

  onSubmit(){
    this.submit.emit(this.form.value);
  }

  archivoSeleccionado(file: any){
    this.form.get('foto').setValue(file);
  }

  cambioMarkdown(texto: string){
    this.form.get('biografia').setValue(texto);
  }

}
