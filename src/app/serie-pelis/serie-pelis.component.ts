import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-serie-pelis',
  templateUrl: './serie-pelis.component.html',
  styleUrls: ['./serie-pelis.component.css']
})
export class SeriePelisComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      console.log(id);
    });
  }
}
