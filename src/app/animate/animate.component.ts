import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations'; 

export const fadeAnimation = trigger('fadeAnimation', [  
  state('void', style({ opacity: 0 })), // Initial state  
  state('*', style({ opacity: 1 })),    // Final state  
  transition(':enter', [animate('500ms ease-in')]), // Enter animation  
  transition(':leave', [animate('300ms ease-out')])   // Exit animation  
]);

@Component({
  selector: 'app-animate',
  imports: [CommonModule],
  templateUrl: './animate.component.html',
  styleUrl: './animate.component.css',
  animations: [fadeAnimation],
})
export class AnimateComponent {
  showElement = true;

  toggleElement() {
    this.showElement = !this.showElement;
  }
}
