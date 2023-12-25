import { Component, ElementRef, ViewChild } from '@angular/core';
import { WEB_TECH, SOFTWARE_TECH, DBMS, TOOLS } from '../../services/data/technologies.data';
import Tech from '../../services/interfaces/tech';
import { IconImageComponent } from '../../components/icon-image/icon-image.component';
@Component({
  selector: 'about-page',
  standalone: true,
  imports: [IconImageComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {
  web_tech: Tech[] = WEB_TECH;
  software_tech: Tech[] = SOFTWARE_TECH;
  dbms: Tech[] = DBMS;
  tools: Tech[] = TOOLS;

  constructor(private el: ElementRef){}
  ngOnInit() {
    console.log(this.el.nativeElement.offsetTop);
  }
}
