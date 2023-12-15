import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-invalid-input-message',
  templateUrl: './invalid-input-message.component.html',
})
export class InvalidInputMessageComponent {
  @Input() message = ""
}
