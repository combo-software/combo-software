import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {Project} from '../project';
import {ProjectService} from '../project.service';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
	
	projects: Project[] = [];
	private subject: ReplaySubject<Project[]>;
	
	constructor(
		private router: Router,
		private projectService: ProjectService
	) {}

	ngOnInit(){
		window.scrollTo(0, 0);
		this.subject = new ReplaySubject<Project[]>();
		this.projectService
			.getProjects()
			.subscribe(
				this.subject
			);
		this.subject.subscribe(
			ps=>{this.projects=ps},
    			e => console.log('onError: ' + e.message),
    			() => console.log('onCompleted'));
	}
	
	goToDetail(slugpass) {
		this.router.navigate(['/projects', slugpass ]);
	}
}