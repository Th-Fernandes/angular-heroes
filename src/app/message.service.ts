import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = ['you got me bro', 'get out of here bud!'];
  
  getMessages(): Observable<string[]> {
    return of(this.messages);
  }
}
