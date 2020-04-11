import { Component } from '@angular/core';
import { OrgData } from './modules/org-chart/orgData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  orgData: OrgData= {
    name: "Hello",
    type: 'User',
    collapsed: true,
    children: [{
      name: "Hello1",
      type: 'User',
      children:[]
    },{
      name: "Hello2",
      type: 'User',
      children:[]
    },{
      name: "Hello3",
      type: 'User',
      children:[]
    }]
  };
}
