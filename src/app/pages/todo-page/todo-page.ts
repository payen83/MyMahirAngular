import { Component, OnInit } from '@angular/core';
import { SharedModules } from '../../shared/shared-modules';
import { MatDialog } from '@angular/material/dialog';
import { AddDialog } from '../../components/add-dialog/add-dialog';
import { Data } from '../../services/data';

interface TodoItem {
  title: string,
  selected: boolean
}

@Component({
  selector: 'app-todo-page',
  imports: [...SharedModules],
  templateUrl: './todo-page.html',
  styleUrl: './todo-page.scss',
})

export class TodoPage implements OnInit{
  
  public todoList: TodoItem[] = [];

  constructor(public dialog: MatDialog, private dataService: Data){}
  
  onAdd(){
    const dialogRef = this.dialog.open(AddDialog);
    dialogRef.afterClosed().subscribe((result)=>{
      console.log(result);
      if(result){
        this.todoList.push({title: result, selected: false});
        this.dataService.setLocalStorage('todo', this.todoList);
      }
    });
  }

  onSelected(index: number){
    this.todoList[index].selected = !this.todoList[index].selected;
    return this.dataService.setLocalStorage('todo', this.todoList);
  }

  onDelete(index: number){
    let confirmation = confirm("Are you sure you want to delete this item?");
    if(confirmation){
      this.todoList.splice(index, 1);
      console.log(this.todoList);
      return this.dataService.setLocalStorage('todo',this.todoList);
    } 
    return;
  }

  onClear(){
    this.dataService.clearStorage(); 
    this.todoList = [];
  }

  ngOnInit(): void {
    let data = this.dataService.getLocalStorage('todo');
    if(data){
      console.log(data);
      this.todoList = JSON.parse(data);
    } else {
      this.todoList = [];
    }
  }
}
