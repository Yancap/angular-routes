import { CanActivateChildFn } from '@angular/router';

export const authChildGuard: CanActivateChildFn = (childRoute, state) => {
  console.log(childRoute);
  
  return true;
};
