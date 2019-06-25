import { ModuleWithProviders } from "../../node_modules/@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";

export const appRoutes: Routes = [
    { 
        path: '',
        redirectTo: 'home/panel',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
     /* {
        path: 'planets',
        component: PlanetsComponent
      },
      {
        path: 'starships',
        component: StarshipsComponent
      },*/

    ]
    
    export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);