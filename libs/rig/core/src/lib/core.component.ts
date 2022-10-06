import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-ng-storybook-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreComponent {}
