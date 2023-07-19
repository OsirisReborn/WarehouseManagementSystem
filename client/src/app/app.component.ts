import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { Pagination } from './models/pagination';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'Warehouse Management System';
  products: Product[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get<Pagination<Product[]>>('http://localhost:5158/api/products?pageSize=50').subscribe({
      next: response => this.products = response.data, //what to do next
      error: error => console.log(error), 
      complete: () => {
        console.log('request completed');
        console.log('extra statements');
      }
    })
  }

}


