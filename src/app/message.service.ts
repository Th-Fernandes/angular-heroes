import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clearAll() {
    this.messages = [];
    this.messages.push('[all messages got cleared out]');
    setTimeout(() => this.messages = [] , 1200);
  }
}
