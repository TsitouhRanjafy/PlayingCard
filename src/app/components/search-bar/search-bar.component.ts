import { Component, EventEmitter, Input, model, NgModule, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  @Input() search = '';
  @Output('onChange') searchChange = new EventEmitter<string>();
  searchButtonClicked = output({
    alias: 'submit'
  })
  ;

  searchClick(): void {
    this.searchButtonClicked.emit();
  }
  updateSearchange(value: string){
    this.searchChange.emit(value);
  }
}
