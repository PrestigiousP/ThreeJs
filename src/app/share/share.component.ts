import {Component, OnInit} from '@angular/core';
import {animate, query, sequence, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
  animations: [
    trigger('contactAnimation', [
      transition('open => closed', [
        sequence([
          query('#svg', [
            animate('2s', style({
              transform: 'rotate(90deg)',
              // transformOrigin: 'center',
            }))
          ]),
          query('#svg', [
            animate('0.5s', style({
              transform: 'rotate(0)',
              // transformOrigin: '150px 115px',
            }))
          ]),
        ])
      ])
    ]),
  ],
})
export class ShareComponent implements OnInit {
  isOpenLock = true;
  isLockRotated = true;
  openLock = true;
  isTest = false;


  constructor() {
  }

  ngOnInit(): void {
  }

  toggle(): void {
    // this.isOpen = !this.isOpen;
    this.isLockRotated = !this.isLockRotated;
    // this.isTest = !this.isTest;
    // console.log(this.isTest);
    // this.openLock = !this.openLock;
    // console.log(this.openLock);
  }

  onRotationCompleted($event: any): void {
    console.log('completed');
    this.isOpenLock = !this.isOpenLock;
    if (!this.isOpenLock) {
      console.log('openLock', this.isOpenLock);
    }
  }
}
