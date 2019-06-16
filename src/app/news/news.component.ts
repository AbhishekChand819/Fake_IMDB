import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';
import { TvService } from '../datatv.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  articles; 
  modals;
  value: string;
  datamodal: string;
  mediatype: string;
  result=false;

  @ViewChild('movieName',{ read: true, static: false }) movieName: ElementRef;
  constructor(private apiService: ApiService,private dataService: DataService,private tvService: TvService) { }

  ngOnInit() {
}

  getNews(){
    this.result=true;
    // console.log(this.value);
    this.apiService.getNews(this.value).subscribe((data)=>{
       console.log(data);
      this.articles = data['results'];
    });
  }

  getData(datamodal,mediatype){
    if(mediatype=='tv')
    {
      this.tvService.getData(datamodal).subscribe((data)=>{
         console.log(data);
        this.modals = data;
      });
    }
    else if(mediatype=='movie')
    {
      // console.log(datamodal);
      this.dataService.getData(datamodal).subscribe((data)=>{
       console.log(data);
      this.modals = data;
    });
    }


  }
}
