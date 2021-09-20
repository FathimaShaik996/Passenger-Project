import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PassengerDataService } from '../passenger-data.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {
  passengerDetails;
  paymentForm: FormGroup;
  submitted = false;
  constructor(
    private passengerService: PassengerDataService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.passengerService.passengerData.subscribe(data => {
      this.passengerDetails = data;
      console.log(data);
    });

    this.paymentForm = this.formBuilder.group({
      creditCard: [
        '',
        [
          Validators.required,
          Validators.maxLength(16),
          Validators.minLength(16)
        ]
      ],
      cva: [
        '',
        [
          Validators.required,
          Validators.maxLength(3),
          Validators.minLength(3),
          Validators.pattern('^[0-9]*$')
        ]
      ],
      expiryDate: [
        '',
        [
          Validators.required,
          Validators.pattern('^(0[1-9]|1[0-2])/?(([0-9]{4}|[0-9]{2})$)')
        ]
      ]
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.paymentForm.invalid) {
      return;
    } else {
      alert('Confirmed');
    }
  }

  onReset(): void {
    this.submitted = false;
    this.paymentForm.reset();
  }
}
