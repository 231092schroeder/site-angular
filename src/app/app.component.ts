import { Component } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService],
})
export class AppComponent {
  title = 'Domap!'

  api: import("/home/ubuntu/schroeder/site/src/app/api").IApi[] | undefined;
  result: any;
 
  constructor(private apServ: ApiService) {}

  ngOnInit() {
    this.apServ.getApi().subscribe(
      res => {
        console.log('Res ', res);
      }
    );
    
  }
}