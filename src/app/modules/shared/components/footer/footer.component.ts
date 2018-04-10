import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MenuService } from '../../services';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public isOpen = false;

  constructor(private _menuService: MenuService) { }

  ngOnInit() {
    this._menuService.open$.subscribe(
      res => this.isOpen = res
    );
  }

}
