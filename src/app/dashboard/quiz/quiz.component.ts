import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  favoriteSeason = '';
  seasons: string[] = ['Finance Ministry', 'Reserve Bank of India', 'State Bank of India', 'SEBI', 'None of the above'];
  constructor() { }

  ngOnInit(): void {
  }

}
