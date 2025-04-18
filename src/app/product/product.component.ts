import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../types';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: Product;
}
