import { Component, OnInit } from '@angular/core';
import { SHOE_FEE } from 'src/app/shared/utils/shoe-fee.util';
import { Shoe } from './model/shoe.model';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss']
})
export class ShoesComponent implements OnInit {
  private _shoeValue!: Shoe;
  private _storage: Storage = sessionStorage;
  private _shoeFee = SHOE_FEE;
  shoes: Shoe[] = [];

  constructor() { }

  get shoe(): Shoe { return this._shoeValue; }
  set shoe(shoe: Shoe) { this.onSaveShoe(shoe) }

  ngOnInit(): void {
    this.onLoadShoe();
  }

  onLoadShoe(): void {
    const sessionShoe: string = this._storage.getItem('shoe') as string;
    const shoes: Shoe[] = sessionShoe ? JSON.parse(sessionShoe) : [];
    this.shoes = shoes;
    sessionStorage.setItem('shoe', JSON.stringify(this.shoes));
  }

  onSaveShoe(shoe: Shoe): void {
    if (shoe.id) {
      this.shoes = this.shoes.map((t) => {
        if (t.id === shoe.id) t = shoe;
        return t;
      });
    } else {
      shoe.id = this.shoes.length + 1;
      shoe.payment = shoe.duration * this._shoeFee;
      this.shoes.push(shoe)
    }

    this._storage.setItem('shoe', JSON.stringify(this.shoes));
  }

  onDeleteShoe(shoe: Shoe): void {
    for (let index = 0; index < this.shoes.length; index++) {
      if (this.shoes[index].id === shoe.id) {
        this.shoes.splice(index, 1);
      }
    }
    sessionStorage.setItem('shoe', JSON.stringify(this.shoes));
  }

  onEditShoe(shoe: Shoe): void {
    this._shoeValue = shoe;
  }
}
