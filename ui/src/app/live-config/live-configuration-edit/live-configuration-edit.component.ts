import { Component, OnInit } from '@angular/core';
import {LiveConfigService} from '../../services/live-config/live-config.service'
import { LiveConfig} from '../../models/liveconfig-model';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-live-configuration-edit',
  templateUrl: './live-configuration-edit.component.html',
  styleUrls: ['./live-configuration-edit.component.css']
})
export class LiveConfigurationEditComponent implements OnInit {

  constructor(private liveConfigService: LiveConfigService) { }
  liveConfigs: MatTableDataSource<LiveConfig>;
  displayedColumns: string[] = ['Configuration', "value", "Actions"]

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

  changeConfig(result: any): void{
    console.log(result);
  }

}
