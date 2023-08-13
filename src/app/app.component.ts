import { Component } from '@angular/core';
import { DynamicScriptLoaderService } from './core/dynamic-script-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) {
    dynamicScriptLoader.loadScript('chartjs');
  }
}
