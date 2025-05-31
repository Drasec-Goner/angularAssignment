import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonService } from '../../services/person.service';
import { Person } from '../../model/person';

@Component({
  standalone: true,
  selector: 'app-edit-person',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit-person.html',
  styleUrls: ['./edit-person.css']
})
export class EditPersonComponent implements OnInit {
  person: Person = {
    name: '',
    age: 0,
    gender: '',
    mobile: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.personService.getPerson(id).subscribe(data => this.person = data);
    }
  }

  updatePerson() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.personService.updatePerson(id, this.person).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
