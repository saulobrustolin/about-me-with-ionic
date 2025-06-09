import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  contactForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      this.presentToast('Formulário enviado com sucesso!', 'success');

      this.contactForm.reset();
    } else {
      console.error('Formulário inválido!');
      this.presentToast('Por favor, preencha todos os campos corretamente.', 'danger');
    }
  }

  async presentToast(message: string, color: 'success' | 'danger' | 'warning') {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      color: color,
      buttons: [
        {
          text: 'Fechar',
          role: 'cancel',
        }
      ]
    });
    await toast.present();
  }
}
