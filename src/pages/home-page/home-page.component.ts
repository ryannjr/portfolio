import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})

export class HomePageComponent {
  @Output() messageToParent: EventEmitter<string> = new EventEmitter();
  ABOUT_OFFSET_TOP = 1080; // 945 px 
  faAngleDown = faAngleDown
  resumePath = "assets/resume/resume.pdf";
  ngOnInit(){
    console.log('HomePageComponent');
  }

  handleClick(){
    window.scrollTo({top: this.ABOUT_OFFSET_TOP, behavior: 'smooth'});
  }
}
