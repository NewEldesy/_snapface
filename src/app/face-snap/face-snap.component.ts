import { Component, Input, OnInit } from '@angular/core';
import { Facesnap } from '../models/face-snap';
import { LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: Facesnap;

  hasSnapped!: boolean;
  SnapButtonText!: String;

  ngOnInit(): void {
    this.SnapButtonText = 'Oh Snap!';
    this.hasSnapped = false;
  }

  onSnap(): void {
    if (this.hasSnapped) {
      this.unSnap();
    } else {
      this.addSnap();
    }
  }

  unSnap(){
    this.faceSnap.removeSnap();
    this.SnapButtonText = 'oh Snap!';
    this.hasSnapped = false;
  }

  addSnap(){
    this.faceSnap.addSnap();
    this.SnapButtonText = 'Oops, Unsnap!';
    this.hasSnapped = true;
  }
}
