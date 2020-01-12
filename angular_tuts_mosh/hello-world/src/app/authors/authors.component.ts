import { Component, OnInit } from "@angular/core";
//import { CoursesService } from "./courses.service";
import { AuthorsService } from "../authors.service";

@Component({
  selector: "app-authors",
  templateUrl: "./authors.component.html",
  styleUrls: ["./authors.component.css"]
})
export class AuthorsComponent {
  title = "3 Authors";
  authors;

  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }
}
