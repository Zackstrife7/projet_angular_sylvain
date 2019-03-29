import { Injectable } from '@angular/core';
import { Conversation } from './models/conversation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConvManagerService {

  private _convs: Conversation[];
  constructor(private http: HttpClient) { }

  findConvs(): Observable<Conversation[]> {
    return this.http.get<Conversation[]>('http://localhost:3000/conversations')
  }
  public getConv(id: number) {
    return this._convs[id];
  }
  public getConvList() {
    return this._convs;
  }
  findMessagesByConv(convid: number): Observable<Conversation> {
    return this.http.get<Conversation>('http://localhost:3000/conversations/' + convid + '?_embed=messages')
  }
}
