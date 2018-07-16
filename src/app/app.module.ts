import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './shop/navbar/navbar.component';
import { FooterComponent } from './shop/footer/footer.component';
import { CookieAlertComponent } from './shop/cookie-alert/cookie-alert.component';
import { MobileMenuComponent } from './shop/mobile-menu/mobile-menu.component';
import { AllCategoriesComponent } from './shop/all-categories/all-categories.component';
import { HomeComponent } from './shop/home/home.component';
import { FlashDealsComponent } from './shop/flash-deals/flash-deals.component';
import { LeftBannersComponent } from './shop/left-banners/left-banners.component';
import { HomeSlidersComponent } from './shop/home/home-sliders/home-sliders.component';
import { DeliveryInfoComponent } from './shop/home/delivery-info/delivery-info.component';
import { HomeBodyComponent } from './shop/home/home-body/home-body.component';
import { LoginComponent } from './kyc/login/login.component';
import { RegisterComponent } from './kyc/register/register.component';
import { ShopComponent } from './shop/shop.component';
import { KycComponent } from './kyc/kyc.component';
import { ForgotPasswordComponent } from './kyc/forgot-password/forgot-password.component';
import { VendorBankComponent } from './kyc/vendor-bank/vendor-bank.component';
import { PhoneVerificationComponent } from './kyc/phone-verification/phone-verification.component';
import { OtpComponent } from './kyc/otp/otp.component';
import { DetailsPageComponent } from './shop/details-page/details-page.component';
import { CooperatorThankYouComponent } from './shop/cooperator-thank-you/cooperator-thank-you.component';
import { ShoppingCartComponent } from './shop/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { ShippingOptionsComponent } from './shop/checkout/shipping-options/shipping-options.component';
import { CooperativesComponent } from './shop/checkout/cooperatives/cooperatives.component';
import { TransactionHistoryComponent } from './shop/transaction-history/transaction-history.component';
import { MyOrdersComponent } from './shop/transaction-history/my-orders/my-orders.component';
import { TransactionTableComponent } from './shop/transaction-history/transaction-table/transaction-table.component';
import { OtpModalComponent } from './otp-modal/otp-modal.component';
import { VendorComponent } from './vendor/vendor.component';
import { VendorNavbarComponent } from './vendor/vendor-navbar/vendor-navbar.component';
import { VendorProfileComponent } from './vendor/vendor-profile/vendor-profile.component';
import { Breadcrumb2Component } from './vendor/breadcrumb2/breadcrumb2.component';
import { MakeSaleComponent } from './vendor/make-sale/make-sale.component';
import { ChangePasswordComponent } from './vendor/change-password/change-password.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  {
    path: 'shop',
    component: ShopComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'product-page', component: DetailsPageComponent },
      { path: 'cooperator-thank-you', component: CooperatorThankYouComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'checkout', component: CheckoutComponent },
      {
        path: 'history',
        component: TransactionHistoryComponent,
        children: [
          { path: '', component: TransactionTableComponent },
          { path: 'orders', component: MyOrdersComponent },
          { path: 'transactions', component: TransactionTableComponent },

        ]
      }
    ]
  },
  {
    path: 'kyc',
    component: KycComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'phone-verification', component: PhoneVerificationComponent },
      { path: 'otp', component: OtpComponent },
      { path: 'vendor-bank', component: VendorBankComponent }
    ]
  },
  { path: 'otp-modal', component: OtpModalComponent },
  {
    path: 'vendor', component: VendorComponent,
    children: [
      { path: '', component: VendorProfileComponent },
      { path: 'profile', component: VendorProfileComponent },
      { path: 'make-sale', component: MakeSaleComponent },
      { path: 'change-password', component: ChangePasswordComponent },
    ]
  },
  { path: '**', redirectTo: '/shop', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CookieAlertComponent,
    MobileMenuComponent,
    AllCategoriesComponent,
    HomeComponent,
    FlashDealsComponent,
    LeftBannersComponent,
    HomeSlidersComponent,
    DeliveryInfoComponent,
    HomeBodyComponent,
    LoginComponent,
    RegisterComponent,
    ShopComponent,
    KycComponent,
    ForgotPasswordComponent,
    VendorBankComponent,
    PhoneVerificationComponent,
    OtpComponent,
    DetailsPageComponent,
    CooperatorThankYouComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    ShippingOptionsComponent,
    CooperativesComponent,
    TransactionHistoryComponent,
    MyOrdersComponent,
    TransactionTableComponent,
    OtpModalComponent,
    VendorComponent,
    VendorNavbarComponent,
    VendorProfileComponent,
    Breadcrumb2Component,
    MakeSaleComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    RouterModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
