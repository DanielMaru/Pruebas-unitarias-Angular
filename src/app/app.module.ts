import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormSumaComponent } from './Components/FormSuma/form-suma/form-suma.component';
import { HttpClientModule } from '@angular/common/http';
import { UserNamePipe } from './Pipe/UserName/user-name.pipe';
import { ColorInputDirective } from './Directives/ColorInput/color-input.directive';


@NgModule({
  declarations: [
    AppComponent,
    FormSumaComponent,
    UserNamePipe,
    ColorInputDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
