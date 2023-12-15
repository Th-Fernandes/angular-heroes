import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PermissionsService {
  canActivate(): boolean {
    return true;
  }
  canMatch(): boolean {
    return true;
  }
}
