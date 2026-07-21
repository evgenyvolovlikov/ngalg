import { Component, input } from '@angular/core'

// TODO: Перенести в модель
interface Lesson {
  id: number
  title: string
  isLocked: boolean
}

@Component({
  selector: 'app-course-lessons',
  template: `
    <ul class="lessons-list">
      @for (lesson of lessons(); track lesson.id) {
        <li class="lesson__item">
          <span class="lesson__title">{{ lesson.title }}</span>
          @if (lesson.isLocked) {
            <span class="lock-icon">🔒</span>
          } @else {
            <span class="status">FREE</span>
          }
        </li>
      }
    </ul>
  `,
  styleUrl: './course-lessons.component.scss'
})
export class CourseLessonsComponent {
  public lessons = input.required<Lesson[]>()
}
