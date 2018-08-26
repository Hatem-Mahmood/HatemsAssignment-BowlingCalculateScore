import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate-bowling-score',
  templateUrl: './calculate-bowling-score.component.html',
  styleUrls: ['./calculate-bowling-score.component.scss']
})
export class CalculateBowlingScoreComponent implements OnInit {

  frames=[];
  rolls=[];
  first:number;
  second:number;

  constructor() { }

  ngOnInit() {
  }
 // submit roll
  roll(pins){
    this.rolls.push(pins);
 }

 //calculate game score
 get score(){
  var result=0;
  var rollIndex=0;
  var self=this;
  for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (isStrike()) {
     result+=getStrikeScore();
     rollIndex++;
    }
    else if (isSpare()) {
      result += getSpareScore();
      rollIndex += 2;
    } else {
      result+=getNormalScore();
      rollIndex+=2;
    }
  }
  return result | 0;
 // check if the frame is strike
  function isStrike(){
    return self.rolls[rollIndex]==10;
  }
   // check if the frame is spare
  function isSpare(){
    return self.rolls[rollIndex]+self.rolls[rollIndex+1]==10;
  }
   // calculate strike score
  function getStrikeScore(){
    return self.rolls[rollIndex]+self.rolls[rollIndex+1]+self.rolls[rollIndex+2]|0;
  }
     // calculate spare score
  function getSpareScore(){
    return self.rolls[rollIndex]+self.rolls[rollIndex+1]+self.rolls[rollIndex+2]|0;
  }
     // calculate normal score
  function getNormalScore(){
    return self.rolls[rollIndex]+self.rolls[rollIndex+1]|0;
  }
}

}
