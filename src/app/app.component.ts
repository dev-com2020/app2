import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title$ = new Observable(observer => {
    setInterval(() => {
      observer.next();
    }, 2000);
});


  private setTitle = () => {
    const timestamp = new Date().getMilliseconds();
    document.title = `App2 ${timestamp}`;
  }

  // private changeTitle(callback: Function){
  //   setTimeout(() => {
  //     callback();
  //   }, 2000);
  // }

//   private onComplete(){
//     return new Promise<void>(resolve => {
//       setInterval(() => {
//         resolve();
//       }, 2000);
//   });
// }

  constructor(){
    this.title$.subscribe(this.setTitle);
}
}