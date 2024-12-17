import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  animations: [
    trigger('childAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-30px)', opacity: 0 }),
        animate(
          '300ms ease-out',
          style({ transform: 'translateY(0)', opacity: 1 })
        ),
      ]),
      transition(':leave', [
        animate(
          '200ms ease-in',
          style({ transform: 'translateY(-30px)', opacity: 0 })
        ),
      ]),
    ]),
  ],
})
export class ChildComponent {}
