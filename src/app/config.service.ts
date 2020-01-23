import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*')
};
const host = 'localhost';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  get_data(): Observable<any>{
    console.log("GREATTTTTTTTTTT")
    // return    this.http.get('http://'+host+':4200/v1/project/assigned_projects'+httpOptions)
    return this.http.get('http://192.168.0.159:8000/api/get-activities/?current_time=09:00:00&current_date=2019-07-23')
    // return this.http.get('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=AIzaSyDcMuIbTbt9dWIfG24dal-LAXY38r7G6Uc&input=JetwingYala&inputtype=textquery&fields=place_id')
  }


}
