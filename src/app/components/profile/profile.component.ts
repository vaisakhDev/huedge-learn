import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';
import { ModalType } from 'src/app/shared/shared.constants';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnDestroy {
  public userForm: FormGroup;
  @ViewChild('modal', { read: ViewContainerRef })
  private entry!: ViewContainerRef;
  private modalSubscription!: Subscription;
  private initialValues: any;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService
  ) {
    this.userForm = this.formBuilder.group({
      displayName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: [''],
      aboutYourself: ['', Validators.maxLength(100)],
      areaOfInterest: this.formBuilder.group({
        designer: [false],
        developer: [false],
        projectManager: [true],
        sales: [false]
      }),
      role: ['', Validators.maxLength(200)],
      experience: ['0-5', Validators.required],
      expertise: ['React', Validators.required],
      userType: ['Student', Validators.required]
    });
    this.initialValues = this.userForm.value;
  }

  get displayName() {
    return this.userForm.get('displayName');
  }

  get firstName() {
    return this.userForm.get('firstName');
  }

  get userType() {
    return this.userForm.get('userType');
  }

  public onSave() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.userForm.reset(this.initialValues);
      this.modalService.openModal(
        this.entry,
        'Your profile is saved!',
        '',
        ModalType.SUCCESS,
        false
      );
    } else {
      return;
    }
  }

  ngOnDestroy(): void {
    if (this.modalSubscription) {
      this.modalSubscription.unsubscribe();
    }
  }
}
