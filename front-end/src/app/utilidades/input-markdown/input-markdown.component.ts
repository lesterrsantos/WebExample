import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit {
  
  constructor() {}

  @Input()
  contenidoMarkdown = '';

  @Input()
  placeHolderTextarea: string = 'Texto';

  @Output()
  changeMarkdown: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    console.log(this.contenidoMarkdown);
  }

  inputTextArea(event: Event) {
    var target = event.target as HTMLInputElement
    var texto = target.value
    this.contenidoMarkdown=texto;
  }
}
