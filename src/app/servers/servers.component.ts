import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]' attribute selector
  //selector: '.app-servers' class selector
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';
  userName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  displayStatus = false
  clickCount = 0;
  clickCountArr = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated= true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
}
  userIsEmpty(){
    if(this.userName === ""){
      return true;
    }
  }

  resetUserName(){
    this.userName = ""
  }

  toggleDisplay(){
    this.clickCount++
    this.clickCountArr.push(this.clickCount);
    console.log(this.clickCountArr);
    if (this.displayStatus == false) {
      this.displayStatus = true;
      return true;
    } else {
      this.displayStatus = false;
      return false;
    }
  }

  getStyle(){
   if(this.clickCount >= 5) {
     return 'background-color: blue'
   }
  }
}
