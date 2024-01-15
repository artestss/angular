import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FictitiousLanguageTranslationService, LanguageTranslationService} from "../../services/language-service";
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'translate-comp',
  templateUrl: 'translate-comp.component.html'
})


export class ElvishTranslationComponent implements OnInit {

  public someText: string = 'lorem'

  private elvish!: string;
  constructor(private translationService: FictitiousLanguageTranslationService) { }

  public ngOnInit(): void {
    this.elvish = this.translationService.elvish(this.someText);
  }
}
