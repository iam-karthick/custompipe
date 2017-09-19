import{ Pipe,PipeTransform} from '@angular/core';
@Pipe({
    name:'grade'
})
export class GradePipe implements PipeTransform{ 
    transform( mark:number ):any{
        if (mark<100){
            return 'E';
        }
    }
}