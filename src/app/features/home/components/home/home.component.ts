import { Component } from '@angular/core';
interface Video {
  id: number;
  title: string;
  watchUrl: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public videoArray: Video[] = [
    {
      id: 1,
      title: "El espíritu de Dios está en este lugar",
      watchUrl: "https://www.youtube.com/watch?v=DTtvrIJon7Q"
    },
    {
      id: 2,
      title: "Dios está aquí",
      watchUrl: "https://www.youtube.com/watch?v=Bc-quA4L1X4"
    },
    {
      id: 3,
      title: "El Espíritu de Dios está en este lugar",
      watchUrl: "https://www.youtube.com/watch?v=rhU_vGb0Llk"
    },
    {
      id: 4,
      title: "Confía en Dios",
      watchUrl: "https://www.youtube.com/watch?v=2B2nWFe4scw"
    },
    {
      id: 5,
      title: "La guadalupana",
      watchUrl: "https://www.youtube.com/watch?v=Lyrvn5PyARo"
    },
    {
      id: 6,
      title: "Alma misionera",
      watchUrl: "https://www.youtube.com/watch?v=sNYI9ksztC0"
    },
    {
      id: 7,
      title: "Vida en abundancia",
      watchUrl: "https://www.youtube.com/watch?v=9_XNHAXILfI"
    },
    {
      id: 8,
      title: "Qué bien se está aquí",
      watchUrl: "https://www.youtube.com/watch?v=JO1bno_l6hk"
    },
    {
      id: 9,
      title: "Todo lo haces nuevo",
      watchUrl: "https://www.youtube.com/watch?v=yJTmiht-URU"
    },
    {
      id: 10,
      title: "Contigo Maria",
      watchUrl: "https://www.youtube.com/watch?v=kkVtd-kam6A"
    },
    {
      id: 11,
      title: "Acaso no estoy yo aquí",
      watchUrl: "https://www.youtube.com/watch?v=yiRuZloI6d0"
    },
    {
      id: 12,
      title: "Milagro de amor",
      watchUrl: "https://www.youtube.com/watch?v=bu-IhAXV72E"
    },
    {
      id: 13,
      title: "Alfa y omega",
      watchUrl: "https://www.youtube.com/watch?v=YxyEa6TTq0s"
    },
    {
      id: 14,
      title: "Cuando estás en el altar",
      watchUrl: "https://www.youtube.com/watch?v=KUPtiXVx2yM"
    },
    {
      id: 15,
      title: "Dios está aquí",
      watchUrl: "https://www.youtube.com/watch?v=PGzQTQShf8A"
    }
  ];

  public constructor() {    
  }
}
