import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../service/producto.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productoService: ProductoService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void{
    this.productoService.lista().subscribe(
      data => {
        this.productos = data;
      },
      err =>{
        console.log(err);
      }
    );
  }

  borrar(producto: Producto){
    this.productoService.delete(producto.id).subscribe(
      data => {
        this.toastr.success('Se ha eliminado el producto Correctamente', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarProductos();
       
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Ha ocurrido un error', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
      }
    );
  }
}
