import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  stringToBeEvaluated : string = "";

  takeInput (num: string){
    this.stringToBeEvaluated = this.stringToBeEvaluated + num;
  }

  evaluateString(){
    if(this.stringToBeEvaluated !== ""){
      this.stringToBeEvaluated = eval(this.stringToBeEvaluated);
    }
  }
  clearString(){
    this.stringToBeEvaluated = "";
  }

  
  }

