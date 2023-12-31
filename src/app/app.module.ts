import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { AsideComponent } from './components/partials/aside/aside.component';
import { HeaderNailsStudioComponent } from './components/partials/header-nails-studio/header-nails-studio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderNailsStudioComponent,
    FooterComponent,
    AsideComponent
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
