export interface OrgData {
	name: string;
	type: string;
	children: OrgData[];
}

export class OrgEntity implements OrgData {
	name: string;
	type: string;
	children: OrgEntity[];
	parent?: OrgEntity;
	constructor(orgStructure: string[], parent?: OrgEntity) {
		this.parent = parent;
		const [name, ...reports] = orgStructure;
		this.name = name.split('(')[0].trim();
		const desigMatch = name.match(/\(([^)]+)\)/);
		this.type = desigMatch && desigMatch[1].trim();

		this.children = reports.map(r => r.substring(1))
			.reduce((previous, current) => {
				if (!current.startsWith(' ')) {
					previous.push([]);
				}
				previous[previous.length - 1].push(current);
				return previous;
			}, <string[][]>[]).map(r => new OrgEntity(r, this));
	}
}
