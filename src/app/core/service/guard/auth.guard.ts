import { CanActivateFn, Router } from '@angular/router';
 
export const authGuard: CanActivateFn = (route, state) => {
  let _Router=new Router()
  if (localStorage.getItem('userToken') !== null) {
   return true;
  }
  else
  {
   _Router.navigate(['/login'])
   return false;
  }
  return true;
};
