import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { AppComponent } from './app.component';
import { DModeComponent } from './d-mode/d-mode.component'; // Import it

@NgModule({
  declarations: [
    AppComponent,
    DModeComponent // Declare here
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,DModeComponent]
})
export class AppModule { }


