import { Component } from '@angular/core';
import { HeaderComponent } from '../../user/header/header.component';
import { MainComponent } from '../../user/main/main.component';
import { FooterComponent } from '../../user/footer/footer.component';
import { DashHeaderComponent } from '../../Dashboard/dash-header/dash-header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MainComponent, FooterComponent, DashHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
