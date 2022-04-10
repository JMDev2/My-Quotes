import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();
    let todayWithNoTime = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    let theDateWithNoTime = new Date(value.getFullYear(), value.getMonth(), value.getDate());
let timeDifference = todayWithNoTime.getTime() - theDateWithNoTime.getTime();
    
 
    let DayDiff = timeDifference/(1000*3600*24)

    if(DayDiff >=1 &&  theDateWithNoTime < todayWithNoTime){
      return DayDiff;
    }
    else{
      return 0;
    }
    

}
}

