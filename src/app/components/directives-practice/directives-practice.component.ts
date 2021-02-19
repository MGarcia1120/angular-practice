import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-practice',
  templateUrl: './directives-practice.component.html',
  styleUrls: ['./directives-practice.component.css']
})
export class DirectivesPracticeComponent implements OnInit {

  showSecretMessage = false;
  log = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails(){
    this.showSecretMessage = !this.showSecretMessage;
    this.log.push(this.log.length+1)
  }



  
}