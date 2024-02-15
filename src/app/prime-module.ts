import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';


@NgModule({
    exports:[
        ButtonModule,
        MenubarModule,
        PanelModule,
        DataViewModule,
        TagModule,
        CardModule,
        CheckboxModule,
        InputTextModule,
        TabViewModule,
        DialogModule
    ]
})

export class PrimeModule {}
