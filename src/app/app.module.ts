import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JosephsComponentComponent } from './josephs-component/josephs-component.component';
import { TreyscomponentComponent } from './treyscomponent/treyscomponent.component';
import { TreysComponentComponent } from './treys-component/treys-component.component';
import { TerrenceComponentComponent } from './terrence-component/terrence-component.component';

@NgModule({
  declarations: [
    AppComponent,
    JosephsComponentComponent,
    TreyscomponentComponent,
    TreysComponentComponent,
    TerrenceComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
