import { Component } from '@angular/core'

import { CourseSidebarComponent } from '@widgets/course-sidebar'

@Component({
  selector: 'app-course-page',
  imports: [CourseSidebarComponent],
  template: `
    <div class="course-page">
      <app-course-sidebar class="course-page__sidebar" />
      <main class="course-page__main">Right</main>
    </div>
  `,
  styleUrl: './course-page.component.scss'
})
export class CoursePageComponent {}
