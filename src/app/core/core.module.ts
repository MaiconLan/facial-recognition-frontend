import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import {CdkScrollableModule} from '@angular/cdk/scrolling';
import {Title} from '@angular/platform-browser';

@NgModule({
  declarations: [NavbarComponent, PaginaNaoEncontradaComponent],
    imports: [
        CommonModule,
        RouterModule,
        CdkScrollableModule
    ],
  providers: [Title],
  exports: [NavbarComponent]
})
export class CoreModule { }
