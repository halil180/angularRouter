import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
animals = [
  {
    name:"animal",
    info:"animal info"
  },
  {
    name:"donkey",
    info:"i am a donkey"
  }
]
}
