import { Routes } from '@angular/router';
import {CatwallComponent} from './catwall/catwall.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [{
  path: 'catwall',
  component: CatwallComponent
},{
  path: '',
  component: HomeComponent
}];
