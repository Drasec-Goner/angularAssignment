import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { Person } from '../../model/person';

@Component({
  standalone: true,
  selector: 'app-people-list',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './people-list.html',
  styleUrls: ['./people-list.css']
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.personService.getPeople().subscribe(data => this.people = data);
  }

  deletePerson(id: string) {
    if (confirm('Delete this person?')) {
      this.personService.deletePerson(id).subscribe(() => this.ngOnInit());
    }
  }
}
