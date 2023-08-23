import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './Public-Pages/homepage/homepage.component';
import { ProductListComponent } from './Public-Pages/product-list/product-list.component';
import { ProductDetailsComponent } from './Public-Pages/product-details/product-details.component';
import { ShoppingCartComponent } from './Public-Pages/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './Public-Pages/checkout/checkout.component';
import { UserAccountComponent } from './Public-Pages/user-account/user-account.component';
import { UserProfileComponent } from './Public-Pages/user-profile/user-profile.component';
import { OrderHistoryComponent } from './Public-Pages/order-history/order-history.component';
import { WishlistComponent } from './Public-Pages/wishlist/wishlist.component';
import { ContactUsComponent } from './Public-Pages/contact-us/contact-us.component';
import { AboutUsComponent } from './Public-Pages/about-us/about-us.component';
import { AdminDashboardComponent } from './admin-pages/admin-dashboard/admin-dashboard.component';
import { OrderListComponent } from './admin-pages/order-list/order-list.component';
import {CustomerManagementComponent} from './admin-pages/customer-management/customer-management.component';
import {InventoryManagementComponent} from './admin-pages/inventory-management/inventory-management.component';
import {
  PromotionsAndDiscountsComponent
} from './admin-pages/promotions-and-discounts/promotions-and-discounts.component';
import {ReportsAndAnalysisComponent} from './admin-pages/reports-and-analysis/reports-and-analysis.component';
import {ContentManagementComponent} from './admin-pages/content-management/content-management.component';
import {UserManagementComponent} from './admin-pages/user-management/user-management.component';
import {NotificationComponent} from './admin-pages/notification/notification.component';
import {
  BackupAndDataManagementComponent
} from './admin-pages/backup-and-data-management/backup-and-data-management.component';
import {SupportAndHelpdeskComponent} from './admin-pages/support-and-helpdesk/support-and-helpdesk.component';
import {SettingsComponent} from './admin-pages/settings/settings.component';
import {HttpClientModule} from "@angular/common/http";
import {NavbarComponent} from './shared/navbar/navbar.component';
import {AFooterComponent} from './shared/a-footer/a-footer.component';
import {AdminSignupComponent} from './admin-pages/admin-signup/admin-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    UserAccountComponent,
    UserProfileComponent,
    OrderHistoryComponent,
    WishlistComponent,
    ContactUsComponent,
    AboutUsComponent,
    AdminDashboardComponent,
    OrderListComponent,
    CustomerManagementComponent,
    InventoryManagementComponent,
    PromotionsAndDiscountsComponent,
    ReportsAndAnalysisComponent,
    ContentManagementComponent,
    UserManagementComponent,
    NotificationComponent,
    BackupAndDataManagementComponent,
    SupportAndHelpdeskComponent,
    SettingsComponent,
    NavbarComponent,
    AFooterComponent,
    AdminSignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
