// * Wanlab 1st Angular Tutorial * //
// * Date 12 Jan 2019 *//

//import decarorator
import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

//decorator function to tell this component what todo
@Component({
  selector: "courses",
  //template: "<h2>{{ getTitle() }}</h2>" // template tuts

  // using directive tuts:
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `
})
export class CoursesComponent {
  title = "List of Courses";

  // using a service tuts
  courses;

  constructor(service: CoursesService) {
    // create an instant for the courses service
    //let service = new CoursesService();
    // initalise the getCourses method
    this.courses = service.getCourses();
  }

  // using directive & array tuts
  //courses = ["courses1", "courses2", "courses3"];

  /*
  // using template & function tuts
  getTitle() {
    return this.title;
  }
  */
}
