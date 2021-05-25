import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  @Input() url: string;
  @Input() port: string;
  configForm: FormGroup

  constructor(
    private configService: ConfigService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    let url: string = this.configService.getURL();
    let port: string = this.configService.getPort();

    this.configForm = this.formBuilder.group({
        URL: new FormControl(url),
        Port: new FormControl(port),
    })
  }

  saveconfig() {
    this.configService.set(
      this.configForm.value.URL,
      this.configForm.value.Port
    )
  }

}
