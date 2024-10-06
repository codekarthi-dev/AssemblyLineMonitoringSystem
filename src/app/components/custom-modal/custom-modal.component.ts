import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent {
  @Input() isOpen: boolean = false; // Control if modal is open
  @Input() content: any[] = []; // Content for the modal

  @Output() modalClosed: EventEmitter<void> = new EventEmitter<void>();


  close() {
    this.modalClosed.emit();
  }
}
