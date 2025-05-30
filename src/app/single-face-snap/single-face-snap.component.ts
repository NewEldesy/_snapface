import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe, NgClass, NgIf, NgStyle, UpperCasePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Facesnap } from '../models/face-snap';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    CommonModule, // Includes NgIf, NgFor, etc.
    NgIf, // Explicitly importing NgIf for clarity, though CommonModule should suffice
    NgClass,
    NgStyle,
    UpperCasePipe,
    DatePipe,
    RouterLink // For the back button
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap: Facesnap | undefined;
  hasSnapped!: boolean;
  SnapButtonText!: string; // Changed String to string for consistency

  constructor(
    private route: ActivatedRoute,
    private faceSnapService: FaceSnapService
  ) {}

  ngOnInit(): void {
    this.SnapButtonText = 'Oh Snap!';
    this.hasSnapped = false;
    const faceSnapId = +this.route.snapshot.params['id'];
    const snap = this.faceSnapService.getFaceSnapById(faceSnapId);
    if (snap) {
      this.faceSnap = snap;
    } else {
      // Handle the case where the facesnap is not found,
      // e.g., navigate to a 404 page or show an error message.
      // For now, faceSnap will remain undefined and the template will show "FaceSnap not found!"
      console.error("Facesnap not found with id:", faceSnapId);
    }
  }

  onSnap(): void {
    if (!this.faceSnap) return; // Guard clause if faceSnap is undefined

    if (this.hasSnapped) {
      this.unSnap();
    } else {
      this.addSnap();
    }
  }

  unSnap(): void {
    if (!this.faceSnap) return;
    this.faceSnap.removeSnap();
    this.SnapButtonText = 'Oh Snap!';
    this.hasSnapped = false;
  }

  addSnap(): void {
    if (!this.faceSnap) return;
    this.faceSnap.addSnap();
    this.SnapButtonText = 'Oops, Unsnap!';
    this.hasSnapped = true;
  }
}
