import { Component, ContentChild, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-panel',
  templateUrl: './dashboard-panel.component.html',
  styleUrl: './dashboard-panel.component.scss',
})
export class DashboardPanelComponent {
  @Input() header: string = '';
  @Input() setting: string = 'none' ;
  @Input() grid: boolean = false ;
  @Input() route: string = '' ;
  @ContentChild('popup') popup: any;
  @ContentChild('content') content: any;





  visible: boolean = false;

  showPopup(){
    this.visible = !this.visible
  }
}
 