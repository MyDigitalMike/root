import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiMail = 'https://mailthis.to/SanRoque2020';
  constructor(private http: HttpClient) {}
   PostMessage(input: any){
     return this.http.post(this.apiMail, input,{responseType: 'text'})
     .pipe(
       map(
         (response)=>{
           if(response){
             return response;
           }
         },
         (error: any) =>{
           return error;          
         }
       )
     )
   }
}
