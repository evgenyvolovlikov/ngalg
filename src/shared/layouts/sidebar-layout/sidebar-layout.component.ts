import { Component } from '@angular/core'

@Component({
  selector: 'app-sidebar-layout',
  template: `
    <aside class="sidebar-layout">
      <ng-content />
    </aside>
  `,
  styleUrl: './sidebar-layout.component.scss'
})
export class SidebarLayoutComponent {}
