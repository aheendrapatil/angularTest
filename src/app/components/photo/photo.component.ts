import { Component,OnInit,Input } from '@angular/core';
import {CommonService} from '../../services/common.service';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-album',
  templateUrl: './photo.component.html'
})
export class PhotoComponent implements OnInit {
    albumId:any;
    photos:any[]=[];
    // album:any;
    constructor(
        private commonService:CommonService,
        private route: ActivatedRoute,
        private router: Router,
        private _location: Location
    ){}
ngOnInit(){ 
    this.albumId=this.route.snapshot.paramMap.get('id');     
    this.getPhotos();
}
    getPhotos():void{
        this.commonService.getPhotos().subscribe(data=>{
            console.log(data);
            this.photos=data.filter(v=>v.albumId==this.albumId);//.find(v=>v.userId==this.userId);
            // this.getUserAlbum(this.user);
        })
    }
     backClicked() {
    this._location.back();
  }
    // getPhotoDetails(album:any):void{
    //     this.router.navigate(['/photo',album.id]);

    // }

 }
