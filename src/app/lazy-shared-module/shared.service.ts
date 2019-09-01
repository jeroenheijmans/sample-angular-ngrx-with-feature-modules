import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { fakeHttp } from '../fake-http.service';
import { pseudoRandomNames } from '../psuedo-random-names.service';

@Injectable()
export class SharedService {
  counter = 0;
  name = pseudoRandomNames.next();

  getItem() : Observable<any> {
    this.counter++;
    return fakeHttp.get(`https://example.org/api/shared/${this.name}/${this.counter}`);
  }
}
