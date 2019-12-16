import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  getFromLocalStorage(KeyName) {
    return localStorage.getItem(KeyName) == null ? '' : localStorage.getItem(KeyName);
  }
}
