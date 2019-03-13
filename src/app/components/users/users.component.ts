import { Component,OnInit } from '@angular/core';
import {CommonService} from '../../services/common.service';
import {AlbumComponent} from '../album/album.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls:['./users.component.css']
})
export class UsersComponent implements OnInit {
    users:any[]=[];
    selectedUser:any;
    albums:any[]=[];
    album:any;
    constructor(
        private commonService:CommonService,
        private router: Router
    ){}
ngOnInit(){
    this.getUsers();
}
    getUsers():void{
        this.commonService.getUsers().subscribe(data=>{
            console.log(data);
            this.users=data;
        })
    }
    getUserDetails(user:any):void{
        // this.selectedUser=user;
        console.log('clicked');
        // this.getAlb(user.id);
        this.router.navigate(['/album',user.id]);
    }
    // getAlb(id:number){
    //     this.album=this.albums.find(v=>v.userId==id);
    // }

    getAlbums():void{
        this.commonService.getAlbum().subscribe(data=>{
            console.log(data);            
            this.albums=data;
        })
    }
 }
