import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<p>{{ 'Angular' | stuff }}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'spectator-jest';
}
