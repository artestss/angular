import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'hello-comp',
    templateUrl: 'hello.component.html',
    styleUrls: ['./styles/hello.web.scss']
})

export class HelloComponent {
  condition = true;
  toggle(){
    this.condition = !this.condition;
  }
}
