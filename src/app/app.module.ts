import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from "./components/hello/hello.component";
import {TextRepeatPipe} from "./pipes/text-repeat.pipe";
import {PoopDirective} from "./directives/poop.directive";
import {PrimaryColorDirective} from "./directives/primary-color.directive";
import {ServiceCompComponent} from "./components/service-comp/service-comp.component";
import {MyService} from "./services/my-service";
import {AuthService} from "./services/auth-service";
import {NewAuthService} from "./services/new-auth-service";
import {ElvishTranslationComponent} from "./components/translate/translate-comp.component";
import {FictitiousLanguageTranslationService, LanguageTranslationService} from "./services/language-service";
import {BREAD_TOKEN} from "./services/token";
import { FormComponent } from './components/form/form/form.component';
import {ReactiveFormsModule} from "@angular/forms";

// class UserConfig {
//   language: string = 'fr'
// }

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TextRepeatPipe,
    PoopDirective,
    PrimaryColorDirective,
    ServiceCompComponent,
    ElvishTranslationComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    MyService,
    { provide: AuthService, useClass: NewAuthService },
    { provide: FictitiousLanguageTranslationService, useExisting: LanguageTranslationService },
    { provide: BREAD_TOKEN, useValue: '🥐' },
    // почему не работает??
    // {
    //   provide: BREAD_TOKEN,
    //   useFactory: (config: UserConfig) => config.language === 'fr' ? '🥐' : '🍞',
    //   deps: [UserConfig]
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
