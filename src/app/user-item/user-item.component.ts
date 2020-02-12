import {
  Component,
  OnInit,
  Input // <--- added this
} from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
@Input() name: string; // <-- added Input annotation
  constructor() { 
      // this.name = 'Felipe'; // set the names
  }

  ngOnInit() {
  }

}