import { Component, Input } from '@angular/core';

@Component({
  selector: 'course-container',
  standalone: true,
  imports: [],
  templateUrl: './course-container.component.html',
  styleUrl: './course-container.component.css'
})
export class CourseContainerComponent {
  @Input() courseCode: string = '';
  @Input() courseName: string = '';
  @Input() courseDescription: string = '';
  @Input() concepts: string[] = [];


}
