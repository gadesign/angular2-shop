import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';

import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';
@Component({
    selector:'pm-app',
    template:`<div><h1>{{ pageTitle }}</h1></div>
    <pm-products></pm-products>
    `,
    directives: [ProductListComponent],
    providers: [ProductService, HTTP_PROVIDERS]
})
export class AppComponent {
    pageTitle: string = 'Good Answer Design';
}