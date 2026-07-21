import { Component } from '@angular/core'

import { CourseLessonsComponent } from '@features/course-lessons'
import { CourseProgressComponent } from '@features/course-progress'

import { SidebarSection } from '@shared/ui/sidebar-section/sidebar-section'

@Component({
  selector: 'app-course-sidebar',
  imports: [
    SidebarSection,
    CourseProgressComponent,
    CourseLessonsComponent
  ],
  template: `
    <app-sidebar-section>
      <app-course-progress
        [progress]="0"
        [watched]="0"
        [total]="150"
      />
    </app-sidebar-section>

    <hr class="divider" />

    <app-sidebar-section [title]="'Лекции'">
      <app-course-lessons [lessons]="lessons" />
    </app-sidebar-section>
  `,
  styleUrl: './course-sidebar.component.scss'
})
export class CourseSidebarComponent {
  public lessons = [
    {
      id: 1,
      title: 'Урок первый',
      isLocked: false
    },
    {
      id: 2,
      title: 'Урок второй',
      isLocked: true
    },
    {
      id: 3,
      title: 'Урок третий',
      isLocked: true
    }
  ]
}
