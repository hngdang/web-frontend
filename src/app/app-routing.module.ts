import { ODetailComponent } from './owner/o-detail/o-detail.component';
import { OResetPasswordComponent } from './owner/o-reset-password/o-reset-password.component';
import { OForgetPasswordComponent } from './owner/o-forget-password/o-forget-password.component';
import { OChangePasswordComponent } from './owner/o-change-password/o-change-password.component';
import { ORegisterComponent } from './owner/o-register/o-register.component';
import { OLoginComponent } from './owner/o-login/o-login.component';
import { OPropertyComponent } from './owner/o-property/o-property.component';
import { OInformationComponent } from './owner/o-information/o-information.component';
import { OMessageComponent } from './owner/o-message/o-message.component';
import { OManagementComponent } from './owner/o-management/o-management.component';
import { OHomeComponent } from './owner/o-home/o-home.component';
import { StorageComponent } from './student/storage/storage.component';
import { InformationComponent } from './student/information/information.component';
import { ChangePasswordComponent } from './student/change-password/change-password.component';
import { LoginComponent } from './student/login/login.component';
import { DetailComponent } from './student/detail/detail.component';
import { ContactComponent } from './student/contact/contact.component';
import { AboutUsComponent } from './student/about-us/about-us.component';
import { PropertyComponent } from './student/property/property.component';
import { HomeComponent } from './student/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tim-thue', component: PropertyComponent },
  { path: 've-chung-toi', component: AboutUsComponent },
  { path: 'lien-he', component: ContactComponent },
  {
    path: 'tim-thue/:id/chi-tiet',
    component: DetailComponent,
    pathMatch: 'full',
  },
  { path: 'dang-nhap', component: LoginComponent },
  { path: 'doi-mat-khau', component: ChangePasswordComponent },
  { path: 'thong-tin-ca-nhan', component: InformationComponent },
  { path: 'danh-sach-yeu-thich', component: StorageComponent },
  { path: 'owner', component: OHomeComponent },
  { path: 'owner/quan-ly-tin', component: OManagementComponent },
  { path: 'owner/dang-tin', component: OPropertyComponent },
  { path: 'owner/tin-nhan', component: OMessageComponent },
  { path: 'owner/thong-tin-ca-nhan', component: OInformationComponent },
  { path: 'owner/dang-nhap', component: OLoginComponent },
  { path: 'owner/dang-ky', component: ORegisterComponent },
  { path: 'owner/dang-tin', component: OPropertyComponent },
  { path: 'owner/chi-tiet', component: ODetailComponent },
  { path: 'owner/doi-mat-khau', component: OChangePasswordComponent },
  { path: 'owner/quen-mat-khau', component: OForgetPasswordComponent },
  { path: 'owner/khoi-phuc-mat-khau', component: OResetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
