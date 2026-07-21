import { Component, input } from '@angular/core'

@Component({
  selector: 'app-course-progress',
  templateUrl: './course-progress.component.html',
  styleUrls: ['./course-progress.component.scss']
})
export class CourseProgressComponent {
  public progress = input<number>(0)
  public watched = input<number>(0)
  public total = input<number>(0)
}
