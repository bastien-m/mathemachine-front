import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComputationComponent } from "./computation/computation.component";

const routes: Routes = [
    {
        path: 'computation',
        component: ComputationComponent
    },
    {
        path: '**',
        redirectTo: '/mathematics/computation'
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MathematicsRoutingModule {}