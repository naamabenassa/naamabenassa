import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    class Prisoner{
      private fullName:string;
      private ID:string;
      private prisonWard:string;
      private yearsToStay:number;

      constructor(fullName:string, ID:string, prisonWard:string , yearsToStay:number){
        this.fullName=fullName;
        this.ID=ID;
        this.setprisonWard(prisonWard);
        this.setyearToStay(yearsToStay); 
     }
      
      getfullName ():string{
        return this.fullName;
      }
      getID ():string{
        return this.ID;
      }
      getprisonWard ():string{
        return this.prisonWard;
      }
      getyearsToStay ():number{
        return this.yearsToStay;
      }

      setprisonWard (pWard:string):void{
        if(pWard.length===1){
          this.prisonWard = pWard;
        }else{
          console.log("prison too long")
        }
      }

      setyearToStay (yTStay:number):void{
        if(yTStay>=0){
          this.yearsToStay = yTStay;
        }        
      }
   }


   class PrisonWorker{
      private fullName:string;
      private ID:string;
      private prisonWard:string;
      private arrOfPrisoner:Prisoner[];

      constructor(fullName:string, ID:string, prisonWard:string, arrOfPrisoner:Prisoner[]){
        this.fullName=fullName;
        this.ID=ID;
        this.setprisonWard(prisonWard);
        this.setarrOfPrisoner(arrOfPrisoner);
      }
      getfullName ():string{
        return this.fullName;
      }
      getID ():string{
        return this.ID;
      }
      getprisonWard ():string{
        return this.prisonWard;
      }
      getarrOfPrisoner():Prisoner[]{
        return this.arrOfPrisoner;
      }
      setprisonWard (pWard:string):void{
        if(pWard.length===1){
          this.prisonWard = pWard;
        }        
      }
      setarrOfPrisoner (aOPrisoner:Prisoner[]):void{
        if(aOPrisoner.length<50){
          this.arrOfPrisoner = aOPrisoner;
        }        
      }
   }

   class Ward{
     private nameOfWard:string;
     private maxOfPeople:number;
     private arryOfPrisoner:Prisoner[];
     private arryOfWorkers:PrisonWorker[];

     constructor(nameOfWard:string, maxOfPeopele:number){
       this.nameOfWard=nameOfWard;
       this.setmaxOfPeople(maxOfPeopele);
     }

     getnameOfWard ():string{
       return this.nameOfWard;
     }

     getmaxOfPeople ():number{
       return this.maxOfPeople;
     }

     getarryOfPrisoner ():Prisoner[]{
       return this.arryOfPrisoner;
     }

     getarryOfWorkers ():PrisonWorker[]{
       return this.arryOfWorkers;
     }

     setnameOfWard (nOWard:string):void{
      if(nOWard.length===1){
        this.nameOfWard = nOWard;
      }        
     }
     setmaxOfPeople(mOPeople:number):void{
      if(mOPeople<100){
        this.maxOfPeople =mOPeople;
      }        
     }
     setarryOfPrisoner (aOPr:Prisoner[]):void{
      if(aOPr.length>2 && aOPr.length<80){
        this.arryOfPrisoner= aOPr;
       }
      }

      setarryOfWorkers (aOWorkers:PrisonWorker[]):void{
        if(aOWorkers.length>2 && aOWorkers.length<80){
          this.arryOfWorkers= aOWorkers;
         }
      }  
      getNumberOfWorkers ():number{
        return this.arryOfWorkers.length;
      }
      getNumberOPrisoners ():number{
        return this.arryOfPrisoner.length;
      }
   }

   var wardA = new Ward("A",3);
   var wardB = new Ward("B",3);
   var wardC = new Ward("C",3);
   
   var worker1A = new PrisonWorker("worker1","1","A",[]);
   var worker2A = new PrisonWorker("worker2","2","A",[]);
   var worker3A = new PrisonWorker("worker3","3","A",[]);
   wardA.setarryOfWorkers([worker1A,worker2A,worker3A])

   var worker1B = new PrisonWorker("worker4","4","B",[]);
   var worker2B = new PrisonWorker("worker5","5","B",[]);
   var worker3B = new PrisonWorker("worker6","6","B",[]);
   wardB.setarryOfWorkers([worker1B,worker2B,worker3B])

   var worker1C = new PrisonWorker("worker7","7","C",[]);
   var worker2C = new PrisonWorker("worker8","8","C",[]);
   var worker3C = new PrisonWorker("worker9","9","C",[]);
   wardC.setarryOfWorkers([worker1C,worker2C,worker3C])

  var prisoner1 = new Prisoner("pr1","id1","A",8);
  var prisoner2 = new Prisoner("pr2","id2","A",8);
  var prisoner3 = new Prisoner("pr3","id3","A",8);  
  var prisoner4 = new Prisoner("pr4","id4","B",8);
  var prisoner5 = new Prisoner("pr5","id5","B",8);
  var prisoner6 = new Prisoner("pr6","id6","B",8);  
  var prisoner7 = new Prisoner("pr7","id7","C",8);
  var prisoner8 = new Prisoner("pr8","id8","C",8);
  var prisoner9 = new Prisoner("pr9","id9","C",8);

  wardA.setarryOfPrisoner([prisoner1,prisoner2,prisoner3])
  
  }
}