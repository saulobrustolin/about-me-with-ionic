import { Component, Input, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  imports: [IonicModule]
})
export class ProjectDetailComponent  implements OnInit {
  @Input() project: any;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    console.log(this.project)
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
