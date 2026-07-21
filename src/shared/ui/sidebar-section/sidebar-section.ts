import { Component, input } from '@angular/core'

@Component({
  selector: 'app-sidebar-section',
  template: `
    <section class="sidebar-section">
      @if (!hideTitle() && title()) {
        <h3 class="sidebar-section__title">{{ title() }}</h3>
      }
      <div class="sidebar-section__content">
        <ng-content />
      </div>
    </section>
  `
})
export class SidebarSection {
  public title = input<string | null>(null)
  public hideTitle = input<boolean>(false)
}
