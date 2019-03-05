import {  Component,OnInit } from '@angular/core';
import { StarWarsService } from './starwars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  people: any[];
  searchString: String;
  inputString: String = '';
  constructor(private swService: StarWarsService) {}

  ngOnInit() {
    this.swService.getPeople().subscribe(result => {
      this.people = result;
    })
  }
  onSubmit(event: Event){
    this.inputString = event.target.value;
    this.swService.searchString(this.inputString);
  }
}