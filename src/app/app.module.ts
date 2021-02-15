import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { getPaginatorIntl } from './paginator-intl';

import { NgxMaskModule } from 'ngx-mask'

registerLocaleData(localePT, 'pt');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatPaginatorModule,
    HttpClientModule,
    NgxMaskModule.forRoot(
      {
        dropSpecialCharacters: true //removes mask when saving
      }
    )

  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt'
  }, {
    provide: DEFAULT_CURRENCY_CODE,
    useValue: 'BRL'
  }, { provide: MatPaginatorIntl, useValue: getPaginatorIntl() }],
  bootstrap: [AppComponent]
})
export class AppModule { }
