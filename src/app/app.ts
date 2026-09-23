import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Sidebar } from './layout/sidebar/sidebar';
import { AppLayout } from './layout/app-layout/app-layout';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Sidebar,AppLayout],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  Name = "rohit";
  protected readonly title = signal('interview-ui-angular');
}
