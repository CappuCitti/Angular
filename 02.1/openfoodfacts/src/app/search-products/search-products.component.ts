import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/Product.model';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.scss']
})
export class SearchProductsComponent implements OnInit{
  data: Product[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    
  }

  search(e: any) {
    var q = e.target.value;
    this.api.products(q).subscribe(data => this.data = data.products);
  }
}
