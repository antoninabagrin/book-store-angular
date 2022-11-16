import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css'],
})
export class DeleteBookComponent implements OnInit {
  userId: string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe((param) => {
      this.userId = param['userId'];
    });
  }
}
