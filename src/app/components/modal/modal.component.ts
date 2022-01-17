import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { ModalType } from 'src/app/shared/shared.constants';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  constructor() {}

  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() modalType: ModalType = ModalType.SUCCESS;
  @Input() showConfirmButton: boolean = false;
  @Output() closeMeEvent = new EventEmitter();
  @Output() confirmEvent = new EventEmitter();
  public ModalTypes = ModalType;
  ngOnInit(): void {
    console.log('Modal init');
    document.body.style.position = 'fixed';
  }

  closeMe() {
    this.closeMeEvent.emit();
  }
  confirm() {
    this.confirmEvent.emit();
  }

  ngOnDestroy(): void {
    console.log(' Modal destroyed');
    document.body.style.position = '';
  }
}
