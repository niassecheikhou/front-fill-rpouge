import { Component, Input, OnInit } from '@angular/core';
import { IMenu } from '../models/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input()
  menu!: IMenu;
  constructor() { }

  ngOnInit(): void {
  }

}
