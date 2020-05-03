import { Component, OnInit, ViewChild } from '@angular/core';
import { MetricsService} from '../../services/metrics/metrics.service';
import {Metric} from '../../models/metric-model';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-cluster-metrics',
  templateUrl: './cluster-metrics.component.html',
  styleUrls: ['./cluster-metrics.component.css']
})
export class ClusterMetricsComponent implements OnInit {

  constructor(private metricsService: MetricsService) { }
  metrics: MatTableDataSource<Metric>;
  displayedColumns: string[] = ['Server Metric', 'Value'];
  cardMetrics: Metric[] = [];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.getMetrics();
    
  }

  setTopThreeMetrics(): void{
    for(let i=0; i<3; i++){
      this.cardMetrics[i] = this.metrics.data[i];
    }
  }

  getMetrics(): void{
    this.metricsService.getMetrics().subscribe(
      response => {
        this.metrics = new MatTableDataSource(response['metrics']);
        this.metrics.paginator = this.paginator;
        this.setTopThreeMetrics();
      },
      error => {}
    );
  }

  onMetricSelect(metric: object, index: number): void{
    console.log(index);
    console.log(metric);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.metrics.filter = filterValue;
  }

}
