import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/core/models';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit {
  constructor() {}
  selectedIndex = -1;
  @Input() courses: Course[] = [];
  @Output() courseSelected = new EventEmitter();

  ngOnInit() {}

  handleSelection(index: number) {
    this.selectedIndex = index;
    // let selectedCourse = this.courses[this.selectedIndex];
    // if (selectedCourse.url.search("youtube") > 0)  {
    //   selectedCourse.url += "?controls=0"
    // }
    // console.log(selectedCourse.url)
    this.courseSelected.emit(this.courses[this.selectedIndex]);
  }
}
