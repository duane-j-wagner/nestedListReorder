import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule, Platform } from '@ionic/angular';
import { Message } from '../services/data.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink],
})
export class MessageComponent {
  private platform = inject(Platform);
  @Input() message: Message | Message[] | undefined;
  isIos() {
    return this.platform.is('ios')
  }
  isArray(message: (Message|Message[]) | undefined): boolean {
    return  message ? !Object.keys(message).includes('id') : false;
  }
  getMessage(m: Message|Message[]): Message {
    return m as Message;
  }
  getMessageArray(m: Message|Message[] | undefined): Message[] {
    return m ? m as Message[]: [];
  }
}
