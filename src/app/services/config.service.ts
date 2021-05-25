import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  url: string = "pia-dwbe.ddns.net";
  port: string = "5000";

  constructor() { }

  getURL() { return this.url }
  getPort() { return this.port }

  set(url: string, port: string) {
    this.url = url; this.port = port
  }

}
