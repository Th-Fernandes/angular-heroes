import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should clear up all messages', () => { 
    for(let i = 0; i <= 3; i++)
      service.add('hello world');

    service.clearAll();
    expect(service.messages).toHaveSize(0);
  })
});
