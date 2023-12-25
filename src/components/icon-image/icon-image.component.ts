import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-image',
  standalone: true,
  imports: [],
  templateUrl: './icon-image.component.html',
  styleUrl: './icon-image.component.css'
})
export class IconImageComponent {

@Input() techName: string = "";
@Input() techPath: string = "";
@Input() techColour?: boolean;



}
