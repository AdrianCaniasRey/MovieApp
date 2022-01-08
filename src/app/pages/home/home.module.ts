import { ProjectInfoModule } from './../../components/project-info/project-info.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { PersonalInfoModule } from 'src/app/components/personal-info/personal-info.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MenuModule,
    PersonalInfoModule,
    ProjectInfoModule
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
