import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMen } from './shared/components/side-men/side-men';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideMen],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('reactive-forms-app');
}
