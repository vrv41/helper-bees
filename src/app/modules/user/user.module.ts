import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FirstStepComponent } from './first-step/first-step.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SecondStepComponent } from './second-step/second-step.component';
import { ThirdStepComponent } from './third-step/third-step.component';
import { FourthStepComponent } from './fourth-step/fourth-step.component';
import { FifthStepComponent } from './fifth-step/fifth-step.component';
import { FinalStepComponent } from './final-step/final-step.component';
import { PageNavComponent } from './components/page-nav/page-nav.component';



@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,
    FooterComponent,
    UserProfileComponent,
    FirstStepComponent,
    ProgressBarComponent,
    SecondStepComponent,
    ThirdStepComponent,
    FourthStepComponent,
    FifthStepComponent,
    FinalStepComponent,
    PageNavComponent,
   
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class UserModule { }
