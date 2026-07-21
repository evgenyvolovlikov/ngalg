import { Routes } from '@angular/router'

import { CoursePageComponent } from '@pages/course-page'

import { APP_ROUTES } from '@shared/lib/routes/app-routes'

import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component'

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: APP_ROUTES.course,
        component: CoursePageComponent
      }
    ]
  }
]
