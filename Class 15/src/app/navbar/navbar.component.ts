import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentSearch!: string;
  searchHistory: string[] = []
  searchHistoryChanged = new EventEmitter();
  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
  }
  addCurrentSearchTerm() {
    this.searchService.addServiceChanged.emit(this.searchHistory.slice)
  }
}
