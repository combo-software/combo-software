import { Component, OnInit, DoCheck } from '@angular/core';

import {Router, ActivatedRoute, Params} from '@angular/router';

import {Project} from '../project';
import {ProjectService} from '../project.service';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit, DoCheck {

	project: Project;
	slug: string;

	private subject: ReplaySubject<Project>;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private projectService: ProjectService){ 
		}
		
	ngOnInit() {
		this.subject = new ReplaySubject<Project>();
		this.goGetEm();
		window.scrollTo(0, 0);
	}

	ngDoCheck() {
		if (this.project && (this.project.slug != this.slug)){
			this.goGetEm();
		}
	}

	unsub() {
		this.subject.unsubscribe();
		this.project = null;
	}

	goGetEm() {
		this.route.params.subscribe((params: Params) => {

			this.slug = params['slug'];
			console.log(this.slug);

			this.projectService.getProject(this.slug).subscribe(this.subject);
			this.subject.subscribe(
				p => this.project = p,
				e => console.log('onError: ' + e.message),
				() => console.log('onCompleted')
			);

		});
	}

	goToProjects() {
  		this.router.navigate(['/projects']);
	}

	goToDetail(slugpass) { 
		this.router.navigate(['/projects', slugpass ]);
	}
}
