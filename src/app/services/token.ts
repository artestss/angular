import {InjectionToken} from "@angular/core";

export const BREAD_TOKEN = new InjectionToken<string>('bread', {
  providedIn: 'root',
  factory: () => '🍞'
});
