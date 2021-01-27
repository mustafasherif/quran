import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { SearchComponent } from './home/components/search/search.component';
import { JuzComponent } from './home/components/juz/juz.component';
import { SettingComponent } from './home/components/setting/setting.component';
import { PopularComponent } from './home/components/popular/popular.component';
import { SurahComponent } from './home/components/surah/surah.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    JuzComponent,
    SettingComponent,
    PopularComponent,
    SurahComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
