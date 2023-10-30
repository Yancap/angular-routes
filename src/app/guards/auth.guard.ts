import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  //console.log(state);
  
  //router.navigate(["/login"])
  return true;
};
