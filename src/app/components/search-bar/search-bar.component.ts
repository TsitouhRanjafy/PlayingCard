import { Component, EventEmitter, input, Input, model, NgModule, output, Output } from '@angular/core';
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

  search = input<string>('');
  searchChange = output<string>({
    alias: 'onChange'
  });
  searchButtonClicked = output({
    alias: 'submit'
  });

  searchClick(): void {
    this.searchButtonClicked.emit();
  }
  updateSearchange(value: string){
    this.searchChange.emit(value)
  }
}
