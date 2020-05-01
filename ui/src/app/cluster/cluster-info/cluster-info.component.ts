import { Component, OnInit } from '@angular/core';
import { ClusterService } from 'src/app/services/cluster/cluster.service';

@Component({
  selector: 'app-cluster-info',
  templateUrl: './cluster-info.component.html',
  styleUrls: ['./cluster-info.component.css']
})
export class ClusterInfoComponent implements OnInit {

  nodes: Node[];
  displayedColumns: string[] = ['Node ID', 'Online Status', 'Actions'];
  constructor(private clusterService: ClusterService) { }

  ngOnInit(): void {
    this.getClusterNodes();
  }

  getClusterNodes(): void{
    this.clusterService.getClusterInfo().subscribe(
      response => {
        this.nodes = response['table']
      }, 
      error => {})
  }
}
