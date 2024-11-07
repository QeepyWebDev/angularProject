import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';

export const routes: Routes = [
{    path: '',
    component: HomeComponent
},

{    path: 'products/:id',
    component: SingleproductComponent
},

{    path: 'products',
    component: ProductsComponent
},

{    path: 'about',
    component: AboutComponent
},

{    path: 'contact',
    component: ContactComponent
},

];
