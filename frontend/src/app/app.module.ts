import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { AddComponent } from './components/event/add/add.component';
import { EditComponent } from './components/event/edit/edit.component';
import { ListComponent } from './components/event/list/list.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserService } from './services/user.service';
import { EventService } from './services/event.service';
import { AsyncLocalStorage } from 'angular-async-local-storage/src/service/lib.service';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import {NgbModal, ModalDismissReasons, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { HomeComponent } from './components/home/home.component';
import { BooktradeComponent } from './components/booktrade/booktrade.component';
import { AddbookComponent } from './components/addbook/addbook.component';
import {BookService} from './services/book.service'
import {BookFilter} from './components/booktrade/booktrade.pipe'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddComponent,
    EditComponent,
    ListComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    BooktradeComponent,
    AddbookComponent,
    BookFilter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BootstrapModalModule,
    NgbModule.forRoot()
  ],
  providers: [BookService, UserService, EventService, NgbModal, AuthGuard, NotAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
