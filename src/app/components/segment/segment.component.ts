import { Component, OnInit } from '@angular/core';
import { Segment } from 'src/app/models/segment';
import { SegmentService } from 'src/app/services/segment.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.css']
})
export class SegmentComponent implements OnInit {

  segments: Segment[] = [];
  currentSegment: Segment;
  constructor(private segmentService: SegmentService) { }

  ngOnInit(): void {
    this.getSegments();
  }

  getSegments() {
    this.segmentService.getSegments().subscribe(response => {
      this.segments = response.data;
    })
  }
  setCurrentSegment(segment: Segment) {
    this.currentSegment = segment;
  }
  getCurrentSegmentClass(segment:Segment){
    if(segment == this.currentSegment){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
}
