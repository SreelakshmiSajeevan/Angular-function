import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kitchen-sink';
  data =300;
  getValue()
  {
    return 10;
  }
   getName() {
    alert('Sree')
  }
  getNameParameter(name:string) {
    alert(name)
  }
  getAny(anyvalue:any) {
    alert(anyvalue)
  }
  getOR(orvalue:string | number) {
    alert(orvalue)
  }
  getStrict(name)
  {
    alert(name)
  }
}
