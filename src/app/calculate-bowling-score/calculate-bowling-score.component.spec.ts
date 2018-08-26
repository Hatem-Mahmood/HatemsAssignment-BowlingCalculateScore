import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CalculateBowlingScoreComponent } from './calculate-bowling-score.component';

describe('CalculateBowlingScoreComponent', () => {
  let component: CalculateBowlingScoreComponent;
  let fixture: ComponentFixture<CalculateBowlingScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        FormsModule
      ],
      declarations: [ CalculateBowlingScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateBowlingScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('can roll gutter game',()=>{
    rollMany(0,20);
      expect(component.score).toBe(0);
   });
   
   it('can roll all once',()=>{
      rollMany(1,20);
      expect(component.score).toBe(20);
   });
   
   it('can roll a strike',()=>{
      component.roll(10);
      component.roll(4);
      component.roll(3);
      rollMany(0,17);
      expect(component.score).toBe(24);
   });
   
   it('can roll a spare',()=>{
      component.roll(5);
      component.roll(5);
      component.roll(2);
      component.roll(3);
      rollMany(0,16);
      expect(component.score).toBe(17);
   });
   
   it('can roll perfect game',()=>{
      rollMany(10,12);
      expect(component.score).toBe(300);
   });
   
   it('can this do test 1',()=>{
      component.roll(2); component.roll(8);
      component.roll(3); component.roll(7);
      component.roll(4); component.roll(6);
      component.roll(2); component.roll(5);
      rollMany(0,12);
      expect(component.score).toBe(46);
   });
   
   it('can this do test 2',()=>{
      component.roll(1); component.roll(4);
      component.roll(2); component.roll(4);
      component.roll(1); component.roll(6);
      component.roll(0); component.roll(8);
      component.roll(3); component.roll(1);
      component.roll(0); component.roll(8);
      component.roll(5); component.roll(3);
      component.roll(10); 
      component.roll(4); component.roll(6);
      component.roll(1); component.roll(6);
      expect(component.score).toBe(84);
   });
   
   it('can this do test 3',()=>{
      component.roll(7); component.roll(3);
      component.roll(4); component.roll(6);
      component.roll(1); component.roll(9);
      component.roll(4); component.roll(6);
      component.roll(5); component.roll(5);
      component.roll(9); component.roll(1);
      component.roll(2); component.roll(8);
      component.roll(3); component.roll(7); 
      component.roll(3); component.roll(7);
      component.roll(4); component.roll(6);
      component.roll(5);
      expect(component.score).toBe(140);
   });
   
   it('can this do test 4',()=>{
      component.roll(10); 
      component.roll(10);
      component.roll(10); 
      component.roll(10);
      rollMany(0,12);
      expect(component.score).toBe(90);
   });
   
   function rollMany(pins,rolls){
     for (let i = 0; i < rolls; i++) {
       component.roll(pins);
     }
   }
   

});
