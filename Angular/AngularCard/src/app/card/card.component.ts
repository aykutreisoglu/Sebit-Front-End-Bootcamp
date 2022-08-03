import { Component, OnInit, Input} from '@angular/core';
import { Card } from '../model/card';

// interface Card {
//        title:string ,
//       imageUrl: string,
//       username: string,
//       content: string
// }

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

// Doğru kullanım bu fakat backend tarafından gelen data sürekli değiştiği için "any" kullanıyoruz.
  // @Input() post:Card ={
  //   title:"",content:"",imageUrl:"",username:""
  // }
  // @Input() imageUrlChild :string ="";
  // @Input() usernameChild :string ="";
  // @Input() contentChild :string ="";


  @Input() post:any ={}

  constructor() { }

  ngOnInit(): void {
  }

}
