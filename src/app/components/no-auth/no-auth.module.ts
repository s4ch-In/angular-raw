import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';

import { NoAuthRoutingModule } from './no-auth-routing.module';

@NgModule({
    imports: [NoAuthRoutingModule],
    declarations: [
        LoginComponent,
    ]
})
export class NoAuthModule { }
