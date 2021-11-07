import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeMainComponent } from './components/de/de-main/de-main.component';
import { EnMainComponent } from './components/en/en-main/en-main.component';
import { Routes, RouterModule } from '@angular/router';

const router: Routes = [{
  path: 'en', component: EnMainComponent     
},
{      
  path: 'de', component: DeMainComponent
},
{ path: '',   redirectTo: 'de', pathMatch: 'full' }]

@NgModule({
  declarations: [
    AppComponent,    
    DeMainComponent,
    EnMainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
