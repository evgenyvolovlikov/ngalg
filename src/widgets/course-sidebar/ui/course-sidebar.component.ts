import { Component } from '@angular/core'

import { SidebarLayoutComponent } from '@shared/layouts/sidebar-layout/sidebar-layout.component'
import { SidebarSection } from '@shared/ui/sidebar-section/sidebar-section'

@Component({
  selector: 'app-course-sidebar',
  imports: [SidebarLayoutComponent, SidebarSection],
  template: `
    <app-sidebar-layout>
      <app-sidebar-section [title]="'Прогресс'">
        Content
      </app-sidebar-section>
    </app-sidebar-layout>
  `
})
export class CourseSidebarComponent {}
