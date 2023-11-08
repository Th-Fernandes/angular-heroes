import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = ['you got me bro', 'get out of here bud!'];

  add(message: string) {
    this.messages.push(message);
  }

  clearAll() {
    this.messages = [];
  }
}
