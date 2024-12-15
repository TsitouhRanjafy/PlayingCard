import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {


  @Output() searchButtonClicked = new EventEmitter();

  searchClick(): void {
    this.searchButtonClicked.emit();
  }
}
