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
      name: 'Actinio', simbolo: 'Ac', natomico: 89, patomico: '227u'
    },
    {
      name: 'Aluminio', simbolo: 'Al', natomico: 13, patomico: '26.981539u'
    },
    {
      name: 'Americio', simbolo: 'Am', natomico: 95, patomico: '243u'
    },
    {
      name: 'Antimonio', simbolo: 'Sb', natomico: 51, patomico: '121.76u'
    },
    {
      name: 'Argón', simbolo: 'Ar', natomico: 18, patomico: '39.948u'
    },
    {
      name: 'Arsénico', simbolo: 'As', natomico: 33, patomico: '74.9216u'
    },
    {
      name: 'Ástato ', simbolo: 'At', natomico: 85, patomico: '210u'
    },
    {
      name: 'Azufre', simbolo: 'S', natomico: 16, patomico: '32.065u'
    },
    {
      name: 'Bario', simbolo: 'Ba', natomico: 56, patomico: '137.327u'
    }
  ]
}
