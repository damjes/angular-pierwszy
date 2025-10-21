import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Wlasny } from "./wlasny/wlasny";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Wlasny],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  protected readonly title = signal('pierwszy');
}
