import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  title = 'test';

  displayedColumns: string[] = ['col1', 'col2', 'col3'];

  @Input() tableData: [];

  @ViewChild("table") divView: ElementRef;

  alert(event) {
    alert(event.target.parentElement.innerText)
    console.log(event.target.parentElement)
  }

  ngOnInit(): void {
  }



}
