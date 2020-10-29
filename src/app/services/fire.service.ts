import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FIRES_BASE_URL } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private httpClient: HttpClient) {}
  loadFireplaceData(app,device,page=1) {
    return this.httpClient.get(FIRES_BASE_URL+"/apps/"+app+"/devices/"+device+"?page="+page, {});
  }
}
