import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../model/person';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PersonService {
  private apiUrl = 'http://localhost:3000/person';

  constructor(private http: HttpClient) {}

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }

  getPerson(id: string): Observable<Person> {
    return this.http.get<Person>(`${this.apiUrl}/${id}`);
  }

  addPerson(person: Person): Observable<any> {
    return this.http.post(this.apiUrl, person);
  }

  updatePerson(id: string, person: Person): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, person);
  }

  deletePerson(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
