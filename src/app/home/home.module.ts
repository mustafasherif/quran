import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuzComponent } from './components/juz/juz.component';
import { PageComponent } from './components/page/page.component';
import { PopularComponent } from './components/popular/popular.component';
import { SearchComponent } from './components/search/search.component';
import { SettingComponent } from './components/setting/setting.component';
import { SurahComponent } from './components/surah/surah.component';



@NgModule({
  declarations: [JuzComponent,PageComponent,PopularComponent,SearchComponent,SettingComponent,SurahComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
