import { Component } from '@angular/core';
import { DashHeaderComponent } from '../../Dashboard/dash-header/dash-header.component';
import { DescripComponent } from '../../Peliculas/descrip/descrip.component';
import { FooterComponent } from '../../user/footer/footer.component';

@Component({
  selector: 'app-dash-rep',
  standalone: true,
  imports: [DashHeaderComponent, DescripComponent, FooterComponent],
  templateUrl: './dash-rep.component.html',
  styleUrl: './dash-rep.component.css'
})
export class DashRepComponent {

}
