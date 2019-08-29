import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parcial2808';
  email = 'andresf-largor@unilibre.edu.co';
  name = 'Andrés Felipe Largo Rodríguez';
  
  elements = [
    {
      name: 'Actinio', simbolo: 'Ac', natomico: 89, patomico: '227u', mtran: 2, category: "Alcalinos"
    },
    {
      name: 'Aluminio', simbolo: 'Al', natomico: 13, patomico: '26.981539u', mtran: 1, category: "Metales"
    },
    {
      name: 'Americio', simbolo: 'Am', natomico: 95, patomico: '243u', mtran: 2, category: "Gases nobles"
    },
    {
      name: 'Antimonio', simbolo: 'Sb', natomico: 51, patomico: '121.76u', mtran: 1, category: "Alcalinos"
    },
    {
      name: 'Argón', simbolo: 'Ar', natomico: 18, patomico: '39.948u', mtran: 1, category: "Actinidos"
    },
    {
      name: 'Arsénico', simbolo: 'As', natomico: 33, patomico: '74.9216u', mtran: 2, category: "Lantánidos"
    },
    {
      name: 'Ástato ', simbolo: 'At', natomico: 85, patomico: '210u', mtran: 1, category: "Alcalinos"
    },
    {
      name: 'Azufre', simbolo: 'S', natomico: 16, patomico: '32.065u', mtran: 1, category: "Gases nobles"
    },
    {
      name: 'Bario', simbolo: 'Ba', natomico: 56, patomico: '137.327u', mtran: 2, category: "Actinidos"
    }
  ]
}
