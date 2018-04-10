import { Component, OnInit } from '@angular/core';

import { MenuService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public open: boolean;
  public mask: boolean;

  constructor(private _menuService: MenuService) {}

  ngOnInit() {
    this.open = true;
    this.mask = null;
  }

  public menuToggle(): void {
    this.open = !this.open;

    if (!this.mask) {
      this.mask = true;
      this._menuService.isOpen(true);
    } else {
      this.mask = !this.mask;
      this._menuService.isOpen(false);
    }
  }

  public logoMenuToggle(): void {
    if (!this.open) {
      this.menuToggle();
    }
  }

}
