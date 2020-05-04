import { Component, OnInit } from '@angular/core';
import {LiveConfigService} from '../../services/live-config/live-config.service'
import { LiveConfig} from '../../models/liveconfig-model';
import {MatTableDataSource} from '@angular/material/table';
import { StatusDialogComponent } from 'src/app/dialogs/status-dialog/status-dialog.component';
import { StatusDialogType } from 'src/app/dialogs/dialog-data';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-live-configuration-edit',
  templateUrl: './live-configuration-edit.component.html',
  styleUrls: ['./live-configuration-edit.component.css']
})
export class LiveConfigurationEditComponent implements OnInit {

  constructor(private liveConfigService: LiveConfigService,
    public dialog: MatDialog) { }
  liveConfigs: MatTableDataSource<LiveConfig>;
  displayedColumns: string[] = ['Configuration', "value", "Actions"]
  formsModel: string[];

  ngOnInit(): void {
    this.getLiveConfig();
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.liveConfigs.filter = filterValue;
  }


  getLiveConfig(): void{
    this.liveConfigService.getLiveConfig().subscribe(
      response => {
        this.liveConfigs = new MatTableDataSource(response['configs']);
        console.log(this.liveConfigs.data)
      },
      error => {}
    )
  }

 
  changeConfig(liveConfig: LiveConfig, value: string): void{
    this.liveConfigService.setLiveConfigSingle(liveConfig, value).subscribe(
      response => {
        console.log(response);
        this.showConfigChangeDialog(StatusDialogType.MESSAGE);
      },
      error => {
        this.showConfigChangeDialog(StatusDialogType.ERROR);
      }
    )
  }

  showConfigChangeDialog(statusDialogType: StatusDialogType): void{
    let dialogMessage = statusDialogType == StatusDialogType.MESSAGE ? "Config updated successully" : "Config updated failed" 
    let dialogRef = this.dialog.open(StatusDialogComponent, {
      height: '200px',
      width: '400px',
      data: { title: "Success", text: dialogMessage,  type: statusDialogType}
    });
  }

}
