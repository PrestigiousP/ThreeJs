import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {animate, query, sequence, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('contactAnimation', [
      transition(':enter', [
        query('.contact', style({ opacity: 0, transform: 'translateY(-15%)' })),
        query('.contact', stagger('300ms', [
          animate('.7s ease-in', style({ opacity: 1, transform: 'translateY(0)'}))
        ]))
      ])
    ])
  ],
})
export class ContactComponent implements OnInit {
  isStarted = true;
  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    message: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.isStarted = false;
  }

  onSubmit(): void {
    // todo : faire le onsubmit
  }

  toggle(): void {
    this.isStarted = !this.isStarted;
    console.log(this.isStarted);
  }
}
