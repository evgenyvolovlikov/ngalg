import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { FooterComponent } from '@widgets/footer'
import { HeaderComponent } from '@widgets/header'

@Component({
  selector: 'app-public-layout',
  template: `
    <div class="public-layout container">
      <app-header />
      <router-outlet />
      <app-footer />
    </div>
  `,
  imports: [HeaderComponent, RouterOutlet, FooterComponent]
})
export class PublicLayoutComponent {}
