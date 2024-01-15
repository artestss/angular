import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class LanguageTranslationService {
  public french(text: string): string { /* translates to French */
    return text = ''
  }

  public japanese(text: string): string { /* translates to Japanese */
    return text = ''
  }

  public elvish(text: string): string { /* translates to Elvish */
    return text = ''
  }

  public klingon(text: string): string { /* translates to Klingon */
    return text = ''
  }

  // so on and so forth, but you see the problem here
}


export abstract class FictitiousLanguageTranslationService {
  abstract elvish: (text: string) => string;
  abstract klingon: (text: string) => string;
}
