import { Component } from '@angular/core'

@Component({
  selector: 'app-sidebar-layout',
  template: `
    <div class="layout-wrapper">
      <aside class="layout__sidebar">
        <ng-content select="[slot-sidebar]"></ng-content>
      </aside>

      <main class="layout__content"><ng-content /></main>
    </div>
  `,
  styleUrl: './sidebar-layout.component.scss'
})
export class SidebarLayout {}
