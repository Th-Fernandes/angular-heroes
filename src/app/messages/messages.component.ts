import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit{
  constructor(
    private messageService: MessageService
  ) {}
  
  messages: string[] = [];

  ngOnInit(): void {
    this.messageService.getMessages()
      .subscribe(messages => this.messages = messages);
  }
} 
