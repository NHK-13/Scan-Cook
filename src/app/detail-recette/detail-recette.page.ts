import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetteService } from '../recette.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-detail-recette',
  templateUrl: './detail-recette.page.html',
  styleUrls: ['./detail-recette.page.scss'],
})
export class DetailRecettePage implements OnInit {

  key: number;
  constructor(private route: ActivatedRoute, private recetteService: RecetteService) {
    this.route.params.subscribe( params => this.key = params.key);
  }

  recette: any[] = [];
  regions: any[] = [];

  getRecettesById(id) {
    this.recetteService.getRecetteById(id)
      .subscribe(
          data => {
            data.intructionRecette = data.intructionRecette.split('*');
            data.ingredientsRecette = data.ingredientsRecette.split('*');
            this.recette = data;
          }
        );
        }

  ngOnInit() {
    this.getRecettesById(this.key);
  }
}
