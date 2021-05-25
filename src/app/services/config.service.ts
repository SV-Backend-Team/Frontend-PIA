import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  url: string = "pia-dwbe.ddns.net";
  port: string = "5000";
  token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJBcHBGcm9udGVuZCJ9.53oano-2uC7HBOwHz-BKj3Gu8XmomtJEbuQ_Bpwrp1Q"

  constructor() { }

  getURL() { return this.url }
  getPort() { return this.port }
  getToken() { return this.token }

  set(url: string, port: string) {
    this.url = url; this.port = port
  }

}
