import { Injectable } from '@angular/core';
import { Biltil } from '../biltil';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class BiltilService {
  url = environment.biltils_url;
  biltils: Biltil[] = [];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  createBiltil(x: Biltil): Observable<Biltil> {
    return this.http.post<Biltil>(`${this.url}/create`, x, this.httpOptions);
  }
  getBiltils(): Observable<Biltil[]> {
    return this.http.get<Biltil[]>(this.url);
  }
}
