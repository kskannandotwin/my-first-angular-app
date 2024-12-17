import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  animateChild,
} from '@angular/animations';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  imports: [CommonModule, ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  animations: [
    trigger('parentAnimation', [
      transition('hidden => visible', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 })),
        query('@childAnimation', animateChild(), { optional: true }), // Animate child on enter
      ]),
      transition('visible => hidden', [
        query('@childAnimation', animateChild(), { optional: true }), // Immediately animate children off
        animate('300ms ease-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class ParentComponent {
  isChildVisible = false;

  toggle() {
    this.isChildVisible = !this.isChildVisible;
  }
}
