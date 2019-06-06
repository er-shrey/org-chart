import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OrgData } from '../orgData';

@Component({
	selector: 'org-chart-entity',
	templateUrl: './entity.component.html',
	styleUrls: ['./entity.component.scss', '../org-chart-combined.scss']
})
export class EntityComponent {
	@Output() toggleChild = new EventEmitter();
	@Input() data: OrgData;
	@Input() hasParent = false;
	@Input() hideChild;

	toggleShowChild(){
		this.toggleChild.emit(new Date());
	}
}
