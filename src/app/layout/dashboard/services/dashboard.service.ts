import { AppSettings } from './../../../config/app-settings';
import { ApiServceService } from './../../../shared/services/api-servce.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
    sliderImages = [];
  private readonly defaultConfig = {
    url: '',
    params: {},
    headers: {},
    getCompleteResponse: false,
    data: ''
  };

  constructor(
    private apiServceService: ApiServceService,
  ) { }

  getSliderImages() {
    const params = {};
    let config = {
      url: AppSettings.apiEndpoints.products.sliderimages,
      params
    };
    config = Object.assign({}, this.defaultConfig, config);
    return this.apiServceService.getRequest(config).pipe(
      map(response => {
        this.sliderImages = response.data.sliderImages;
        return this.sliderImages;
      })
    );
  }
}
