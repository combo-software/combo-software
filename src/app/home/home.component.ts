import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Project} from '../project';
import {ProjectService} from '../project.service';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private projects: Project[] = [];
	private subject: ReplaySubject<Project[]>;

	constructor(
		private router: Router,
		private projectService: ProjectService
	) { }

  ngOnInit() {
		window.scrollTo(0, 0);
    this.subject = new ReplaySubject<Project[]>();
		this.projectService.getProjects().subscribe(this.subject);
		this.subject.subscribe(
			projects => this.projects = projects.slice(Math.max(projects.length - 3, 1)).reverse()
		);
	}

}
