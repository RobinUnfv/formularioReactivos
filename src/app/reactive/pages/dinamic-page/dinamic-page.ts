import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-dinamic-page',
  imports: [JsonPipe],
  templateUrl: './dinamic-page.html',
  styleUrl: './dinamic-page.css',
})
export class DinamicPage {}
