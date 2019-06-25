import { HomeComponent } from "./home.component";
import { HttpClientModule } from "../../../node_modules/@angular/common/http";
import { BrowserModule } from "../../../node_modules/@angular/platform-browser";
import { CommonModule } from "../../../node_modules/@angular/common";
import { NgModule } from "../../../node_modules/@angular/core";
import { HomeService } from "./home.service";

@NgModule({
    imports: [
        HttpClientModule,
      BrowserModule,CommonModule
    ],
    declarations: [
      HomeComponent
    ],
    providers: [],
    exports: []
  })
  export class HomeModule { }