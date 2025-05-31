import { Routes } from '@angular/router';
import { PeopleListComponent } from './components/people-list/people-list';
import { AddPersonComponent } from './components/add-person/add-person';
import { EditPersonComponent } from './components/edit-person/edit-person';

export const routes: Routes = [
  { path: '', component: PeopleListComponent },
  { path: 'add', component: AddPersonComponent },
  { path: 'edit/:id', component: EditPersonComponent }
];
