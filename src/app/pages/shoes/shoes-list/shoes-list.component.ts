import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Shoe } from '../model/shoe.model';

@Component({
  selector: 'app-shoes-list',
  templateUrl: './shoes-list.component.html',
  styleUrls: ['./shoes-list.component.scss']
})
export class ShoesListComponent implements OnInit {
  @Input() shoes: Shoe[] = [];
  @Output() deleteShoe: EventEmitter<Shoe> = new EventEmitter<Shoe>();
  @Output() editShoe: EventEmitter<Shoe> = new EventEmitter<Shoe>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteShoe(shoe: Shoe): void {
    this.deleteShoe.emit(shoe);
  }

  onEditShoe(shoe: Shoe): void {
    this.editShoe.emit(shoe);
  }

}
