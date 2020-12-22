import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppHttpServiceService } from './../app-http-service.service';


@Component({
  selector: 'app-pdv',
  templateUrl: './pdv.component.html',
  styleUrls: ['./pdv.component.css']
})
export class PdvComponent implements OnInit {

  public products: any;
  public productFilter = '';
  public demand_products = [];
  public total_demand = 0;
  public value_entry = 0;
  public change = 0;

  public product = {
    id_product: '',
    name_product: '',
    price: ''
  };

  constructor(private service: AppHttpServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getProducts();    
  }

  get productList(){
    return this.products?.filter(product => {
      return product.name.toLowerCase().indexOf(this.productFilter.toLowerCase()) !== -1;
    });
  }

  getProducts() {
    this.service.build('products')
      .list()
      .subscribe((data) => {
        this.products = data;
      });
  }

  addDemandProduct(product) {

    this.product.id_product = product.id;
    this.product.name_product = product.name;
    this.product.price = product.price;
    this.demand_products.push({...this.product});
    this.total_demand += product.price;
    console.log(this.total_demand);
    console.log('Debug no product', product);
    console.log('Debug no demand_products', this.demand_products);
  }

  changeMoney() {
    this.change = this.value_entry - this.total_demand;
  }

  save() {
    this.service.build('demands')
      .createDemand(this.demand_products)
      .subscribe((data) => {
        this.demand_products = [];
        this.total_demand = 0;
        this.value_entry = 0;
        this.change = 0;
      });    
  }

}
