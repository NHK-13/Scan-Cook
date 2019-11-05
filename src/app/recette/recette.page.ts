import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../recette.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-recette',
  templateUrl: './recette.page.html',
  styleUrls: ['./recette.page.scss'],
})
export class RecettePage implements OnInit {
  textSearch = '';

  constructor(private route: ActivatedRoute, private recetteService: RecetteService, private router: Router) { }
  recettes: any[] = [];
  queryText: string;
  isItemAvailable = false;

  initializeTitleRecette() {
    this.recetteService.getRecette()
      .subscribe(data => {
        this.recettes = data;
        console.log(data);
      });
  }

  ngOnInit() {
    this.recetteService.getRecette()
      .subscribe(data => {
        this.recettes = data;
        console.log(data);
      });
  }

  searchRecette(event) {
    this.initializeTitleRecette();

    const val = event.target.value;
    this.textSearch = val;
    console.log(val);
    if (val && val.trim() != '') {
      this.isItemAvailable = true;
      this.recettes = this.recettes.filter((titreRecette) => {
        return (titreRecette.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
