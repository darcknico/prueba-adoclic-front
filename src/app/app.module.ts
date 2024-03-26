import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './services/auth-interceptor.service';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatOption, MatSelect } from '@angular/material/select';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './services/auth.service';
import { ProductModalComponent } from './components/modals/product-modal/product-modal.component';
import { AuthGuard } from './services/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShoppingComponent,
    ProductModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatSelect,
    MatOption,

    NgbModule,

  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
