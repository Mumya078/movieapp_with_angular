import { Component } from '@angular/core';
import {Model,TodoItems} from "./model";
import { NgModule} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  model = new Model()
  isDisplay=false;
  getsName(){
    return this.model.user;
  }

  getItems(){
    if(this.isDisplay){
      return this.model.items
    }
    return this.model.items.filter(item=>item.action==false);
  }

  addItem(value: string){
    if (value !=""){
      this.model.items.push(new TodoItems(value,false))
    }
  }

}
