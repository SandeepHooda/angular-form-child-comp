import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { Person  } from './name-editor/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NameEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  childname:string = '';
  public personList : Person[] = [];
  
  ngOnInit(): void {
    for (let i=0 ;i<2;i++ ){
      let personA : Person = new Person();
      personA.id = i+1;
      personA.fName = personA.id+" Sandeep"
      personA.lName = personA.id+" Hooda"
      personA.car = "mercedes";
      this.personList.push(personA);
    }
    

   
  }

  public addPerson():void{
    let personA : Person = new Person();
    personA.id = this.personList.length +1;
    personA.fName = personA.id+" Sandeep"
    personA.lName = personA.id+" Hooda"
    personA.car = "audi";
    this.personList.push(personA);
  }
  public removePerson():void{
    
    this.personList.pop()
  }

  public saveThisToDB(person:Person):void{
    alert(" Save ID:"+person.id +" F name: "+person.fName+" L Name: "+person.lName+" car "+person.car)
  }
  title = 'child-comp-formbased';
}
