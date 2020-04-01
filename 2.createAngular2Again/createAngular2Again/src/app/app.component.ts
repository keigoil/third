import { Component } from '@angular/core';
import { StylesCompileDependency } from '@angular/compiler';

export class Human{
  id: number;
  name: string;
}

const HUMEN: Human[] = [
  { id: 11, name: '胖丁'},
  { id: 12, name: '喷火龙'},
  { id: 13, name: '喵喵'},
  { id: 14, name: '妙蛙种子'},
  { id: 15, name: '小海龟'},
  { id: 16, name: '可达鸭'},
  { id: 17, name: '剧毒瓦斯'},
]

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <div *ngIf="selectedHuman">
    <h2>{{selectedHuman.name}} cute!</h2>
    <div><label>id:</label>{{selectedHuman.id}}</div>
    <div>
      <label>name:</label>
      <input [(ngModel)]="selectedHuman.name" placeholder="name"/>
    </div>
  </div>
  <ul class="humen">
    <li *ngFor="let human of humen" (click)="onSelect(human)" [class.selected]="human === selectedHuman">
      <span class="">{{human.id}}</span>{{human.name}}
    </li>
  </ul>
  `,
  styles:[`
    .selectrd {
      background-color: #CFD8DC !important;
      color: white;
    }
  `]
})

//组件
export class AppComponent {
  title = 'createAngular2Again --神奇宝贝列表';
  humen = HUMEN;
  selectedHuman:Human;
  onSelect(human:Human):void {
    this.selectedHuman = human;
  }
}
