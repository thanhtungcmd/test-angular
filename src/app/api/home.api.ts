import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: "root"
})

export class HomeApi {

  constructor(private http:HttpClient) {}

  getHomeAll() {
    return this.http.get('https://m.ibolero.vn/info/banner');
  }

}
