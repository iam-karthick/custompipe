import { Component } from '@angular/core';

@Component({
  selector: 'my-main',
  templateUrl: `./main.component.html`,
})
export class MainComponent  {  
    name:string;

     newFunction() {
        this.name="karthick";
    }
}
