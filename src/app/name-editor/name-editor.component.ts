import { Component, Input, OnInit } from '@angular/core';
import {  FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Person } from './person';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-name-editor',
  standalone: true,

  templateUrl: './name-editor.component.html',
  styleUrl: './name-editor.component.css',
  imports: [ReactiveFormsModule],
})
export class NameEditorComponent implements OnInit{

  @Input() person:Person = new Person();
  @Output() savePersonEvent = new EventEmitter<Person>();


  personForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    car: new FormControl(''),
  });

  ngOnInit(): void {
   
    this.personForm = new FormGroup({
      firstName: new FormControl(this.person.fName),
      lastName: new FormControl(this.person.lName),
      car :new FormControl(this.person.car),
    });
  }

  updatePerson() {
    let savePerson:Person = new Person();
    savePerson.id = this.person.id;
    savePerson.fName = this.personForm.value.firstName!;
    savePerson.lName = this.personForm.value.lastName!;
    savePerson.car = this.personForm.value.car!;

    this.savePersonEvent.emit(savePerson);
  }
}
