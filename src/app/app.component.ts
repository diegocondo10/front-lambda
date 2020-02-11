import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'front-lambda';

  URL = 'https://fpq8qm1um5.execute-api.us-east-1.amazonaws.com/examen';

  arrayImagenes = []

  initialForm = {
    url: '',
    usuario: ''
  }

  formulario = {
    ...this.initialForm
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getImagenes()
  }

  getImagenes() {
    this.http.post(this.URL, { opcion: "1" })
      .subscribe(respuesta => {
        //console.log('OBJECT:', respuesta['data'])
        //console.log('ARRAY:', Object.values(respuesta['data']))
        this.arrayImagenes = Object.values(respuesta['data'])
      })

  }

  setImagen() {
    console.log('FORMULARIO: ', this.formulario)
    this.http.post(this.URL, { opcion: '2', data: this.formulario })
      .subscribe(respuesta => {
        this.getImagenes()
        this.formulario = {
          ...this.initialForm
        }
      })
  }

  publicarEnFirebase(event) {
    event.preventDefault()
    this.setImagen()

  }


}
