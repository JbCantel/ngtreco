import { environment } from './../../environments/environment';
import { Component } from '@angular/core';



@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent {

  public env = environment;

}
