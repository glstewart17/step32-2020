import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CheckInModalComponent } from '../check-in-modal/check-in-modal.component';
import { ApiService } from '../../api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from 'src/app/classes/store/store';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-store', 
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  @Input() store: Store;
  latLng: string;
  isLoaded: boolean;

  constructor(
    public matDialog: MatDialog,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    ) { }

  /**
   * Runs when component is loaded
   */
  ngOnInit(): void {
    // Defaults to API not called yet
    this.isLoaded = false;
    this.getStore();
  }

  getStore(): void {
    const id = this.route.snapshot.paramMap.get('id').toString();
    this.apiService.getStoreById(id)
      .subscribe(
        (res: Store) => {
          this.store = res
        },
        err => {
          console.log(err);
        },
        () => {
          this.initTemplate();
        }
      );
  }

  initTemplate(): void {
    // Sets loaded state to true
    this.isLoaded = true;
    console.log("CLIENT: API call finished");
    // Gets properly formatted latlng
    this.latLng = this.store.latitude + "," + this.store.longitude;
    console.log("CLIENT: latLng is " + this.latLng);
  }
  
  /**
   * Opens check in modal dialog using check in modal component
   * @returns opens new check in modal on screen
   */
  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "check-in-modal";
    dialogConfig.height = "510px";
    dialogConfig.width = "460px";
    const modalDialog = this.matDialog.open(CheckInModalComponent, dialogConfig);
  }

  redirectToMap() {
    const url = 'https://www.google.com/maps/search/?api=1&query=' + this.latLng;
    window.open(url, "_blank");
  }

  goBack() {
    window.history.back();
  }

}
