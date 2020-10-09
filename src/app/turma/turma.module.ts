import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CadastroTurmaComponent} from './cadastro-turma/cadastro-turma.component';
import {CheckboxModule} from 'primeng/checkbox';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from "primeng/inputtext";
import {SharedModule} from "../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {TooltipModule} from "primeng/tooltip";
import { ListaTurmaComponent } from './lista-turma/lista-turma.component';
import {DropdownModule} from "primeng/dropdown";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {ListboxModule} from 'primeng/listbox';
import {PickListModule} from 'primeng/picklist';



@NgModule({
  declarations: [CadastroTurmaComponent, ListaTurmaComponent],
  imports: [
    CommonModule,
    CheckboxModule,
    FormsModule,
    InputTextModule,
    SharedModule,
    HttpClientModule,
    RouterModule,
    TooltipModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    ListboxModule,
    PickListModule
  ]
})
export class TurmaModule {
}
