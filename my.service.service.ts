import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }

  data:any;

getData(){
  return this.http.get('https://jsonplaceholder.typicode.com/users');
}

sendData(data:any){
  return this.http.post('https://jsonplaceholder.typicode.com/users',data);
}

updateRecordData(id:any,dt1:any){
   return this.http.put("https://reqres.in/api/users/2"+id,dt1);
}

deleteData(id:any){
return this.http.delete("https://reqres.in/api/users/2"+id);
}
}
