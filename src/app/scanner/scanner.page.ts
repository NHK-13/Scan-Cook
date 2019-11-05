import { OpenFoodServiceService } from './../open-food-service.service';
import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {

  scannedData = [];
  barcodeScannerOptions: BarcodeScannerOptions;
  formScan: FormGroup;
  submitted = false;
  flag = false;
  barcodeScannerResponse;
  dataTable: any;

  constructor(private barcodeScanner: BarcodeScanner, private formBuilder: FormBuilder, private openFoodService: OpenFoodServiceService) {

    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true,
    };
  }

  ngOnInit() {
  }

  scanCode() {
    this.flag = true;
    this.barcodeScanner
      .scan()
      .then(
        (barcodeData: BarcodeScanResult) => {
          return barcodeData.text;
        })
      .then(
        (barcodeData: string) => {
          this.openFoodService.getFood(barcodeData)
            .subscribe(
              data => {
                this.dataTable = data.product.product_name_fr;
                this.scannedData.push(this.dataTable);
              },
              err => {
                this.dataTable = err;
                alert(err.message);
              }
            );
        })
      .catch(err => {
        console.log('Error', err);
      });
  }
  pushData(dataTable) {
    // traitement de data
    this.dataTable = this.scannedData.push(dataTable);
  }

  get getformS() {
    return this.formScan.controls;
  }
  get getIngredients() {
    return this.getformS.ingredients as FormArray;
  }

  sendRequest() {

    this.submitted = true;

    // this.apirecettes
    //   .getRecettes(this.scannedData)
    //   .then(listeRecettes => {
    // afficher liste recette, router vers la page etc
    //   })
    //   .catch(err => {
    //     console.log("Error", err);
    //   });
    alert('SUCCESS' + JSON.stringify(this.formScan.value, null, 4))
  }

  onReset() {
    this.submitted = false;
    this.formScan.reset();
    this.getIngredients.clear();
  }

  onClear() {
    this.scannedData = [];
  }
}
