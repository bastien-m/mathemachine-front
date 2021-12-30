import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: '/home'
    }
]
    

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}