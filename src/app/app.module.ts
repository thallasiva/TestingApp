import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ApiListService } from './api-list.service';
import { HttpClientModule } from '@angular/common/http';
import { CurdListComponent } from './curd-list/curd-list.component';
import { CreateUpdateComponent } from './create-update/create-update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ProductDetailsComponent,
    CurdListComponent,
    CreateUpdateComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [ApiListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
