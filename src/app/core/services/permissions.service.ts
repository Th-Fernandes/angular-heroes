import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PermissionsService {
  canActivate(): boolean {
    return false;
  }
  canMatch(): boolean {
    return true;
  }
}
