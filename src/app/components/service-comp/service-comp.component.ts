import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MyService} from "../../services/my-service";
import { BREAD_TOKEN } from "../../services/token"
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'service-comp',
  templateUrl: 'service-comp.component.html'
})
export class ServiceCompComponent {
  constructor(
    private myService: MyService,
    @Inject(BREAD_TOKEN) private _bread: string
  ) {
  }

  public bread: string = this._bread
}
