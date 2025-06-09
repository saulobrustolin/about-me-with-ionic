import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProjectDetailComponent } from '../components/project-detail/project-detail.component';

@Component({
  standalone: false,
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {
  projects: Array<any> = [
    {
      title: "PWA ADS UPF",
      subtitle: "PWA usando HTML, JS e CSS.",
      description: "Link do projeto: https://github.com"
    },
    {
      title: "TODO List",
      subtitle: "App de tarefas usando Ionic.",
      description: "Link do projeto: https://github.com"
    },
    {
      title: "Personal APP",
      subtitle: "App de apresentação pessoal com ionic.",
      description: "Link do projeto: https://github.com"
    }
  ]

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {

  }

  async viewDetails(project: any) {
    const modal = await this.modalController.create({
      component: ProjectDetailComponent,
      componentProps: {
        project
      }
    })
    await modal.present()
    await modal.onDidDismiss()
  }
}
