import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listado-generico',
  templateUrl: './listado-generico.component.html',
  styleUrls: ['./listado-generico.component.css']
})
export class ListadoGenericoComponent implements OnInit {

  constructor() { }

  @Input()
  listado: any;

  ngOnInit(): void {
  }

}
