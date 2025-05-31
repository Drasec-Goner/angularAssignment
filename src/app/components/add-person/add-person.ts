import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { Person } from '../../model/person';

@Component({
  standalone: true,
  selector: 'app-add-person',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './add-person.html',
  styleUrls: ['./add-person.css']
})
export class AddPersonComponent {
  person: Person = {
    name: '',
    age: 0,
    gender: '',
    mobile: ''
  };

  constructor(private personService: PersonService, private router: Router) {}

  addPerson() {
    this.personService.addPerson(this.person).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
