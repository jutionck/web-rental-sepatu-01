import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SHOE_CONDITION, SHOE_FINE } from 'src/app/shared/utils/shoe-fee.util';
import { Shoe } from '../model/shoe.model';

@Component({
  selector: 'app-shoes-form',
  templateUrl: './shoes-form.component.html',
  styleUrls: ['./shoes-form.component.scss'],
})
export class ShoesFormComponent implements OnInit, OnChanges {
  @Input() shoe!: Shoe;
  @Output() shoeChange: EventEmitter<Shoe> = new EventEmitter<Shoe>();
  isStatus: string = '';
  fineTotal: number = 0;
  condition: string = '';

  constructor() { }

  shoeForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    shoe: new FormControl(null, Validators.required),
    wearer: new FormControl(null, Validators.required),
    duration: new FormControl(1, [
      Validators.required,
      Validators.maxLength(1),
    ]),
    borrowedAt: new FormControl(''),
    returnedAt: new FormControl(''),
    payment: new FormControl(0),
    fine: new FormControl(0),
    condition: new FormControl(null),
    status: new FormControl(null),
  });

  ngOnChanges(): void {
    if (this.shoe) {
      this.setFormValue(this.shoe);
    }
  }

  ngOnInit(): void { }

  onSubmitShoe(): void {
    this.shoeChange.emit(this.shoeForm.value);
    this.shoeForm.reset();
  }

  onSetStatus(event: any): void {
    const { value } = event.target;
    const { borrowedAt } = this.shoe;
    const dateDifference =
      Number(value.split('-')[2]) - Number(borrowedAt.split('-')[2]);
    const lateAmount = dateDifference - (this.shoe.duration - 1);
    if (lateAmount > 0) {
      this.isStatus = 'Telat';
      this.fineTotal = SHOE_FINE * lateAmount;
    } else {
      this.isStatus = 'Kembali';
      this.fineTotal = 0;
    }
  }

  onSetFine(event: any): void {
    const { data } = event.target;
    if (data === 'Rusak') {
      this.fineTotal = this.fineTotal + SHOE_CONDITION;
    }
  }

  setFormValue(shoe: Shoe): void {
    if (shoe.id) {
      this.shoeForm.controls['id']?.setValue(shoe.id);
      this.shoeForm.controls['shoe']?.setValue(shoe.shoe);
      this.shoeForm.controls['wearer']?.setValue(shoe.wearer);
      this.shoeForm.controls['duration']?.setValue(shoe.duration);
      this.shoeForm.controls['borrowedAt']?.setValue(shoe.borrowedAt);
      this.shoeForm.controls['returnedAt']?.setValue(shoe.returnedAt);
      this.shoeForm.controls['payment']?.setValue(shoe.payment);
      this.shoeForm.controls['fine']?.setValue(shoe.fine);
      this.shoeForm.controls['condition']?.setValue(shoe.condition);
      this.shoeForm.controls['status']?.setValue(shoe.status);
    } else {
      this.shoeForm.controls['id']?.setValue(shoe.id);
      this.shoeForm.controls['shoe']?.setValue(shoe.shoe);
      this.shoeForm.controls['wearer']?.setValue(shoe.wearer);
      this.shoeForm.controls['duration']?.setValue(shoe.duration);
    }
  }
}
