import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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
  }

  ngOnInit(): void {}

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
    } else {
      return;
    }
  }
}
