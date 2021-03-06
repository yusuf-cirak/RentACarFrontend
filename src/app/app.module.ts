import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { NaviComponent } from './components/navi/navi.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoginComponent } from './components/login/login.component';
import { BrandPipePipe } from './pipes/brand-pipe.pipe';
import { BrandDetailComponent } from './components/brand/brand-detail/brand-detail.component';
import { ColorDetailComponent } from './components/color/color-detail/color-detail.component';
import { ColorPipePipe } from './pipes/color-pipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    NaviComponent,
    CustomerComponent,
    RentalComponent,
    CarDetailComponent,
    VatAddedPipe,
    CartSummaryComponent,
    FilterPipePipe,
    CarAddComponent,
    BrandAddComponent,
    ColorAddComponent,
    LoginComponent,
    BrandPipePipe,
    BrandDetailComponent,
    ColorDetailComponent,
    ColorPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })

  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
