
# Angular Org Chart

An Angular 2+ library for displaying Organization charts. It's a very lightweigt library with the features currently not available in any other library. It's written in pure typescript and is developed focussing on Angular projects

## Getting Started

For using the chart, you'll need to do the folloing steps:

### Installation
```
npm install angular-org-chart --save
```
### Add the dependency in module

Add 'OrgChartModule' in imports

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OrgChartModule } from 'angular-org-chart';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	OrgChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

### Formatting the data in component

The data requires few parameters for displaying the correct chart:
```
{
      name: "Element Value",
      type: 'Element Type',
      children:[]
}
```

Example component

```
import { Component } from '@angular/core';
import { OrgData } from 'angular-org-chart/src/app/modules/org-chart/orgData';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  orgData: OrgData= {
    name: "Iron Man",
    type: 'CEO',
    children: [
		{
			name: "Captain America",
			type: 'VP',
			children: [
				{
					name: "Hawkeye",
					type: 'manager',
					children: []
				},
				{
					name: "Antman",
					type: 'Manager',
					children: []
				}
			]
		},
		{
			name: "Black Widow",
			type: 'VP',
			children: [
				{
					name: "Hulk",
					type: 'manager',
					children: [
						{
							name: "Spiderman",
							type: 'Intern',
							children: []
						}
					]
				},
				{
					name: "Thor",
					type: 'Manager',
					children: [
						{
							name: "Loki",
							type: 'Team Lead',
							children: []
						}
					]
				}
			]
		}
	]
  };
}

```

### Using the org chart in HTML template

```
<angular-org-chart id="orgChartId" [data]="orgData"></angular-org-chart>
```
Pleaase note that 'id' is required if you want to change the css. As the style which you'll need to give for the boxes and the lines, you'll be required to add it on the basis of 'id' else the css won't be applied.

## Personalized CSS

Use the 'id' and place these css:
For Lines:
```
#orgChartId .org-chart-entity-border {
	border-left: 1px solid green;
	border-top: 1px solid green;
}
```
For Distance between the levels:
```
#orgChartId .org-chart-entity-connector {
	height: 2em;
}
```
For box styles:
```
#orgChartId .org-chart-entity-box {
	align-items: center;
    border: 1px solid blue;
    background-color: blue;
    border-radius: 3px;
	box-shadow: 0 .5rem 1rem #777!important;
}
```
### Example
![enter image description here](https://raw.githubusercontent.com/er-shrey/org-chart/master/src/assets/example.png)


### Features

* Expand/Collapse on clilck
* Custom Styles
* Maintained and lightweight code

## Upcoming features

* Feature to turn off default expand/collapse on click.
* Icon support.
* More freedom of custom styles.
* Expand / Collapse all feature.

## Authors

* **Shrey Kumar Jain** - *Initial work* - [Blog]([https://researchershrey.wordpress.com/](https://researchershrey.wordpress.com/))