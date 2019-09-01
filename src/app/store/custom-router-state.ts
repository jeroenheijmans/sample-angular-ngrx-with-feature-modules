import { Params, Data } from '@angular/router';

export interface CustomRouterState {
  url: string;
  queryParams: Params;
  params: Params;
  outlet: string;
  data: Data;
}
