import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-course-new",
  templateUrl: "./course-new.component.html",
  styleUrls: ["./course-new.component.css"]
})
//export class CourseNewComponent implements OnInit {
export class CourseNewComponent {
  title = "List of new courses";
  courses;

  constructor() {
    // instant the CoursesService class
  }
}
