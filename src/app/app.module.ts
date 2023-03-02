import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { GenerateCsrPageComponent } from './components/generate-csr-page/generate-csr-page.component';
import { GetCertPageComponent } from './components/get-cert-page/get-cert-page.component';





const route: Routes = [
  { path: '', component: GenerateCsrPageComponent },
  { path: 'getcert', component: GetCertPageComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    GenerateCsrPageComponent,
    GetCertPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
