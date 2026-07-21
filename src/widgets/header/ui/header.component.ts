import { Component } from '@angular/core'

import { defaultLinks } from '@shared/lib/routes/make-links'

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <div class="header__logo">Logo</div>
      <ul class="header__list">
        @for (link of links; track link.route) {
          <li class="header__item">
            <a class="header__link">
              {{ link.key }}
            </a>
          </li>
        }
      </ul>
      <div class="header__actions">Actions</div>
    </header>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public links = defaultLinks
}
