import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './student/home/home.component';
import { NavbarComponent } from './student/components/navbar/navbar.component';
import { FooterComponent } from './student/components/footer/footer.component';
import { ContactComponent } from './student/contact/contact.component';
import { AboutUsComponent } from './student/about-us/about-us.component';
import { PropertyComponent } from './student/property/property.component';
import { LoginComponent } from './student/login/login.component';
import { DetailComponent } from './student/detail/detail.component';
import { InformationComponent } from './student/information/information.component';
import { StorageComponent } from './student/storage/storage.component';
import { ChangePasswordComponent } from './student/change-password/change-password.component';
import { ONavbarComponent } from './owner/components/o-navbar/o-navbar.component';
import { OLoginComponent } from './owner/o-login/o-login.component';
import { ORegisterComponent } from './owner/o-register/o-register.component';
import { OForgetPasswordComponent } from './owner/o-forget-password/o-forget-password.component';
import { OInformationComponent } from './owner/o-information/o-information.component';
import { OManagementComponent } from './owner/o-management/o-management.component';
import { OMessageComponent } from './owner/o-message/o-message.component';
import { OHomeComponent } from './owner/o-home/o-home.component';
import { OChangePasswordComponent } from './owner/o-change-password/o-change-password.component';
import { OPropertyComponent } from './owner/o-property/o-property.component';
import { AHeaderComponent } from './admin/components/a-header/a-header.component';
import { ANavbarComponent } from './admin/components/a-navbar/a-navbar.component';
import { APropertyComponent } from './admin/a-property/a-property.component';
import { AArticleComponent } from './admin/a-article/a-article.component';
import { AUserComponent } from './admin/a-user/a-user.component';
import { AStudentComponent } from './admin/a-student/a-student.component';
import { AContactComponent } from './admin/a-contact/a-contact.component';
import { OResetPasswordComponent } from './owner/o-reset-password/o-reset-password.component';
import { ODetailComponent } from './owner/o-detail/o-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    AboutUsComponent,
    PropertyComponent,
    LoginComponent,
    DetailComponent,
    InformationComponent,
    StorageComponent,
    ChangePasswordComponent,
    ONavbarComponent,
    OLoginComponent,
    ORegisterComponent,
    OForgetPasswordComponent,
    OInformationComponent,
    OManagementComponent,
    OMessageComponent,
    OHomeComponent,
    OChangePasswordComponent,
    OPropertyComponent,
    AHeaderComponent,
    ANavbarComponent,
    APropertyComponent,
    AArticleComponent,
    AUserComponent,
    AStudentComponent,
    AContactComponent,
    OResetPasswordComponent,
    ODetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
