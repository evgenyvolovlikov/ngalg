import { Routes } from '@angular/router'

import { CoursePageComponent } from '@pages/course-page'

import { appRoutes } from '@shared/config/routes.config'

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: appRoutes.course,
        component: CoursePageComponent
      }
    ]
  }
]
