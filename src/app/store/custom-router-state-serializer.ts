import { RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';
import { CustomRouterState } from './custom-router-state';

export class CustomSerializer implements RouterStateSerializer<CustomRouterState> {
  serialize(routerState: RouterStateSnapshot): CustomRouterState {
    let route = routerState.root;

    while (route.firstChild) {
      // see: https://github.com/angular/angular/issues/19420
      const _mergedParentData = { ...route.data, ...route.firstChild.data };
      route = route.firstChild;
      route.data = _mergedParentData;
    }

    return {
      url: routerState.url,
      queryParams: routerState.root.queryParams,
      params: route.params,
      outlet: route.outlet,
      data: route.data,
    };
  }
}
