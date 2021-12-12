import { Component, OnInit } from '@angular/core';
import { Animal } from './types';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss'],
})
export class ChildComponentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let cat: Animal = new Animal('orange', 5, 'tom');
    console.log(cat);

    console.log(this.add(1, 2));
    console.log(this.add('1', '2'));
  }

  add<T>(a: T, b: T): [T] {
    return [a];
  }
}
