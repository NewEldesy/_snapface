import { Component, Input, OnInit } from '@angular/core';
import { Facesnap } from '../models/face-snap';
import { CommonModule, DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common'; // Added CommonModule
import { RouterLink } from '@angular/router'; // Import RouterLink

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    CommonModule, // Added CommonModule
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    RouterLink // Added RouterLink
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
