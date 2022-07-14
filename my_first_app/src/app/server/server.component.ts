import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverID: number;
  serverStatus: string;
  allowNewServer: boolean;
  serverCreationStatus: string;

  constructor() {
    this.serverID = 10;
    this.serverStatus = 'offline';
    this.allowNewServer = false;
    this.serverCreationStatus = 'No server was created';

    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  getServerStatus() {
    return this.serverStatus;
  }
  onCreateServer() {
    this.serverCreationStatus = 'server created successfully';
  }
}
