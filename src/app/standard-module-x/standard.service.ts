import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { fakeHttp } from '../fake-http.service';

@Injectable()
export class StandardService {
  private counter = 0;

  getItem() : Observable<any> {
    this.counter++;
    return fakeHttp.get(`https://example.org/api/standard/${this.counter}`);
  }
}
