import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId : number = 10;
  serverId2: number = 3;
  serverStatus: string = 'offline';

  allowNewServer = false;
  serverCreationStatus = "No server was created"
  serverName = "";
  serverCreated = false;
  servers = ['TestServer','TestServer2'];

  userName = '';
  userCreationStatus = '';
  userID = '';

  getServerStatus(){
    return this.serverStatus;
  }

  

  constructor() { 
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    
    setTimeout(() => {
     this.allowNewServer = true 
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUserName(){
    this.userCreationStatus = 'User name ' + this.userName + ' has been created'
    this.userName = '';
  }

  onUpdateUserID(event: Event){
    this.userID = (<HTMLInputElement>event.target).value;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
