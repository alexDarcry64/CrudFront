import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productoURL = 'http://localhost:8080/producto/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(this.productoURL + 'lista');
  }

  public detail(id: number): Observable<Producto>{
    return this.httpClient.get<Producto>(this.productoURL + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<Producto>{
    return this.httpClient.get<Producto>(this.productoURL + `detailname/${nombre}`);
  }

  public save(producto: Producto): Observable<Producto>{
    return this.httpClient.post<Producto>(this.productoURL + 'create', producto);
  }

  public update(id: number,producto: Producto): Observable<Producto>{
    return this.httpClient.put<Producto>(this.productoURL + `update/${id}`, producto);
  }

  public delete(id: number): Observable<Producto>{
    return this.httpClient.delete<Producto>(this.productoURL+`delete/${id}`);
  }
}
