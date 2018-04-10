import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MenuService {

    public open$ = new Subject<boolean>();

    public isOpen(open) {
      this.open$.next(open);
    }

}
