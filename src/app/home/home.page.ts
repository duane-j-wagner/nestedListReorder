import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IonicModule, ItemReorderEventDetail, RefresherCustomEvent } from '@ionic/angular';
import { MessageComponent } from '../message/message.component';

import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, MessageComponent],
})
export class HomePage {
  private data = inject(DataService);
  constructor() {}

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMessages(): (Message|Message[])[] {
    return this.data.getMessages();
  }

  handleReorder(ev: Event) {
    const cev = ev as CustomEvent<ItemReorderEventDetail>;
    this.data.setMessages(cev.detail.complete(this.data.getMessages()));
  }
  
}
