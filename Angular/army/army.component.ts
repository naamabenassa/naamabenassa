import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-army',
  templateUrl: './army.component.html',
  styleUrls: ['./army.component.css']
})
export class ArmyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    class Soldier{
      private ID:number;
      private isCombat:boolean;
      private force:number;

      constructor(ID:number, isCombat:boolean){
        debugger;
        this.ID=ID;
        this.isCombat=isCombat;
        this.force=(Math.floor(Math.random() *3) + 1); 
      }
      public getId():number{
        debugger;
        return this.ID;
      }
      public getisCombat():boolean{
        debugger;
        return this.isCombat;
      }
      public getforce():number{
        debugger;
        return this.force;
      }
      public updateIfCombat(isCombatsoldier:boolean):void{
        this.isCombat=isCombatsoldier;
      }
      public setforce(forceID:number){
        this.force=forceID;
      }
    
    }
    class Commander extends Soldier{
      private soldiersArr : Soldier[]

      constructor(ID:number, isCombat:boolean, soldierArr: Soldier[]){
        super(ID, isCombat);
        this.soldiersArr = soldierArr;
      }
      public getCombatSoldiersNum(){
        debugger;
        var combatCount = 0;
        for (var i=0;i<this.soldiersArr.length;i++){
          if (this.soldiersArr[i].getisCombat() == true){
            combatCount++;
          }
        }
        return combatCount;
      }
    }

    class Unit{
      private soldiersArr: Soldier[];
      private commanderArr: Commander[]
      private unitName: string;
      private unitCommanderId: number;

      constructor(unitName: string,commanderId: number, soldiersArr: Soldier[], commanderArr:Commander[]){
        this.soldiersArr = soldiersArr;
        this.commanderArr = commanderArr;
        this.unitName = unitName;
        this.unitCommanderId = commanderId;
      }
      public getunitName():string{
       return this.unitName;
      }
      public setCommanderId(id:number){
        this.unitCommanderId = id;
      }
    }

    var sol1= new Soldier(1,true);
    var sol2= new Soldier(2,false);
    var sol3= new Soldier(3,true);
    var solArr = [sol1,sol2,sol3];
    debugger;
    var comm1= new Commander(4,true,solArr);
    comm1.getId();
    comm1.getisCombat();
    comm1.getCombatSoldiersNum();

    sol1.getforce()
    sol1.setforce(2)

 
  }

}
