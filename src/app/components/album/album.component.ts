import { Component,OnInit,Input } from '@angular/core';
import {CommonService} from '../../services/common.service';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html'
})
export class AlbumComponent implements OnInit {
    userId:any;
    albums:any[]=[];
    // album:any;
    constructor(
        private commonService:CommonService,
        private route: ActivatedRoute,
        private router: Router,
        private _location: Location
    ){}
ngOnInit(){ 
    this.userId=this.route.snapshot.paramMap.get('id'); 
    console.log(this.userId);  
    this.getAlbums();
}
    getAlbums():void{
        this.commonService.getAlbum().subscribe(data=>{
            console.log(data);
            this.albums=data.filter(v=>v.userId==this.userId);//.find(v=>v.userId==this.userId);
            // this.getUserAlbum(this.user);
        })
    }
    getPhotoDetails(album:any):void{
        this.router.navigate(['/photo',album.id]);

    }
    backClicked() {
    this._location.back();
  }

 }
