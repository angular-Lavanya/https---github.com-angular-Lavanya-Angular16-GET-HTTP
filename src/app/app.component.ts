import { Component } from '@angular/core';
import { GetApiService } from './get-api.service';
import { LoaderService } from './loader/loader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //public username : any;
  title = 'Welcome back,';
  dashboard:any;
  constructor( private api:GetApiService,public loaderService: LoaderService)
  {

  }
  ngOnInit()
  {
    this.api.apiCall().subscribe((data)=>{
    console.warn("get api data",data);
    
     this.dashboard = data;
     
    }
    
    ) 
  }
}
