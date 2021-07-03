import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../../services/personas.service';
import {Persona} from '../../interfaces/persona';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  public mis_personas: Array<Persona>;
  //public mis_personas: Persona[];

  constructor(private personasService: PersonasService) { }

  ngOnInit(): void {
    this.personasService.getUserData().subscribe((data:any)=>{
      console.log(data.results);  
      this.mis_personas = data.results;
    });
  }
  

  
}
