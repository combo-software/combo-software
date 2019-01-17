import { Injectable } from '@angular/core';
import { Project } from './project'
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService {

  public dbProjects: FirebaseListObservable<Project[]>
	constructor(public db: AngularFireDatabase) {
      this.dbProjects = db.list('projects');
  }

	getProjects(startIndex?: number, endIndex?:number): Observable<Project[]>{
		if (startIndex && endIndex){
			return this.dbProjects.map(projects => projects.filter(project => project.id <= startIndex && project.id >= endIndex));
		}else{
			return this.dbProjects.map(projects => projects);
		}
  }
  
	getProject(slug: string): Observable<Project>{
		return this.dbProjects.map(projects => projects.filter(project=>project.slug === slug)[0]);
	}
  
}