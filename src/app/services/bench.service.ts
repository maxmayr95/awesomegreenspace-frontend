import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ONE_ENTRY_DATA, SOME_ENTIRES_DATA, SOME_ENTIRES_DATA_STOLE } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BenchService {

  constructor(private httpClient: HttpClient) { }

  getData(id) {
    //we mock one entry of a bench
    return this.httpClient.get(ONE_ENTRY_DATA, {});
  }

  getDatas() {
    //we mock some entries of a bench
    return this.httpClient.get(SOME_ENTIRES_DATA, {});
  }

  getDatasStolen() {
    //we mock some entries of a bench
    return this.httpClient.get(SOME_ENTIRES_DATA_STOLE, {});
  }
}
