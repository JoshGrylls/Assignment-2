import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImguploadService } from '../services/imgupload.service';
import { BrowserModule } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  username:string;
  currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  selectedfile = null;
  imagepath="";

  constructor(private router: Router, private imguploadService: ImguploadService) { }

  ngOnInit() {
    this.username = this.currentUser["username"];
    var tryUser = {
      username:this.username
    }
    $.post("/users/getimgpath", tryUser, (tryUser) => {
      console.log(tryUser);
      this.imagepath = tryUser;
    });
  }

  ngOnDestroy() {
    var updateUser = {
      username:this.username,
      imagepath:this.imagepath
    }
    $.post("/users/update", updateUser, (updateUser) => {
      //console.log(this.imagepath);
      console.log(updateUser);
    });
  }

  logout(){
    sessionStorage.clear();
    console.log('session cleared');
    this.router.navigateByUrl('');
  }

  onFileSelected(event) {
    console.log(event);
    this.selectedfile = event.target.files[0];
  }

  onUpload(){
    const fd = new FormData();
    fd.append('image', this.selectedfile, this.selectedfile.name);
    this.imguploadService.imgupload(fd).subscribe(res=>{
      this.imagepath = res.data.filename;
      console.log(res.data.filename + ' , ' + res.data.size);
    });
  }
}
