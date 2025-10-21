import { Component, signal } from '@angular/core';
import { Wlasny } from "./wlasny/wlasny";
import { Pudelko } from "./pudelko/pudelko";

@Component({
  selector: 'app-root',
  imports: [Wlasny, Pudelko],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  protected readonly title = signal('pierwszy');
}
