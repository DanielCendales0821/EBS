import { NgModule } from '@angular/core';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
    BreadcrumbComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    SpinnerComponent,
    PagenotfoundComponent,
    InicioComponent
]

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        NgxSpinnerModule,
        BrowserAnimationsModule,
        CommonModule,
        RouterModule
    ],
    exports: [
        ...COMPONENTS,
        NgxSpinnerModule,
        CommonModule,
        BrowserAnimationsModule
    ]
})
export class ComponentModule { }
