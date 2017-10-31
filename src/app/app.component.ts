import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'min&max';
  result:number;
  value1="";
  value2="";
  value3="";
  minFunction(){
    if (parseInt(this.value1)<=parseInt(this.value2) && parseInt(this.value1)<=parseInt(this.value3)) {
      this.result=parseInt(this.value1);
    } else if (parseInt(this.value2)<=parseInt(this.value1) && parseInt(this.value2)<=parseInt(this.value3)){
      this.result=parseInt(this.value2);
    }else{
      this.result=parseInt(this.value3);
    }
  }
  maxFunction(){
    if (parseInt(this.value1)>parseInt(this.value2) && parseInt(this.value1)>parseInt(this.value3)) {
      this.result=parseInt(this.value1);
    } else if (parseInt(this.value2)>parseInt(this.value1) && parseInt(this.value2)>parseInt(this.value3)){
      this.result=parseInt(this.value2);
    }else{
      this.result=parseInt(this.value3);
    }
  }
}
