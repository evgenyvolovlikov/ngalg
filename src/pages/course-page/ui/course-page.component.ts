import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { CourseSidebarComponent } from '@widgets/course-sidebar'

import { SidebarLayout } from '@shared/ui/sidebar-layout/sidebar-layout.component'

@Component({
  selector: 'app-course-page',
  imports: [
    CourseSidebarComponent,
    SidebarLayout,
    RouterOutlet
  ],
  template: `
    <app-sidebar-layout>
      <app-course-sidebar slot-sidebar></app-course-sidebar>

      <main>
        Content:
        <router-outlet />
      </main>
    </app-sidebar-layout>
  `,
  styleUrl: './course-page.component.scss'
})
export class CoursePageComponent {}
