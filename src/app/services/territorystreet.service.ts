import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Country } from '../model/territory';


@Injectable({
  providedIn: 'root'
})
export class TerritorystreetService {

  constructor(public httpclient: HttpClient) { }
  httpOptions =
  { headers: new HttpHeaders({
    'x-access-token': 'eyJhbGciOiJIUzI1NiJ9.MDQxOTA0ZjAtOTI5ZS0xMWVkLTg5MjAtNWY0OTdjOGNlNWMz.UifRLCyvY2_hQi4YeuQIQ7yWNuDS7KbSxseWmS_PmfI'
})

}

getCountry(): Observable<any>{
  return this.httpclient.get('https://api.aircheckr.com/territory/countries',{headers : this.httpOptions.headers})
}

/** get statistics of Leuven
 */

getStatisticLeuven(): Observable<any>{
  return this.httpclient.get('https://api.aircheckr.com/city/stats/name/Leuven?fields=aqi_11_long_term,aqi_4_long_term,main_polls_long_term,yearly_bad_days,yearly_mean_values,percentiles,poll_info',{headers: this.httpOptions.headers})

}

getNameCityInFrance(): Observable<any>{
  return this.httpclient.get('https://api.aircheckr.com/territory/FR/names', {headers : this.httpOptions.headers})
}

getQualityAirToulon(): Observable<any>{
  return this.httpclient.get('https://api.aircheckr.com/territory/FR/name/Toulon', {headers : this.httpOptions.headers})
}

}
