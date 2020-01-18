import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'ng-search-bar',
  template: `

  <div class="container">
  <div class="content-overview">
    <input type="text" class="search-input-field" placeholder={{textfield}}><button class="btn btn-primary btn-class">Search</button>
  </div></div>
    `,
  styles: [
    '.content-overview{background: #fff; border-radius: 4px; box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 2px 6px 2px rgba(60,64,67,.15); margin: 30px auto 32px;} .btn-class{height: 60px; width: 125px;} .search-input-field{height: 60px; width: 89%; border: none; border-radius: 4px; padding: 20px; color:black; font-size:14px; :focus{ border: none};}'
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SearchBarComponent implements OnInit {
  @Input() textfield: any;
  constructor() { }

  ngOnInit() {
  }

}
