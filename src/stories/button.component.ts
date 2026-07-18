import { CommonModule } from '@angular/common'
import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core'

@Component({
  selector: 'app-storybook-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      (click)="onClick.emit($event)"
      [ngClass]="classes"
      [ngStyle]="{ 'background-color': backgroundColor }"
    >
      {{ label }}
    </button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  /** Is this the principal call to action on the page? */
  @Input()
  public primary = false

  /** What background color to use */
  @Input()
  public backgroundColor?: string

  /** How large should the button be? */
  @Input()
  public size: 'small' | 'medium' | 'large' = 'medium'

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  public label = 'Button'

  /** Optional click handler */
  @Output()
  public handleClick = new EventEmitter<Event>()

  public get classes(): string[] {
    const mode = this.primary
      ? 'storybook-button--primary'
      : 'storybook-button--secondary'

    return [
      'storybook-button',
      `storybook-button--${this.size}`,
      mode
    ]
  }
}
