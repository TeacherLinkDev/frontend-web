import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { FirebaseError } from 'firebase/app';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage {
  credentials = {
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {}

  async onSignIn() {
    if (this.credentials.email && this.credentials.password) {
      const loading = await this.loadingController.create({
        message: 'Signing in...',
      });
      await loading.present();

      try {
        await this.authService.signIn(this.credentials.email, this.credentials.password);
        await loading.dismiss();
      } catch (error: unknown) {
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Sign in failed',
          message: this.getErrorMessage(error),
          buttons: ['OK'],
        });
        await alert.present();
      }
    }
  }

  private getErrorMessage(error: unknown): string {
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case 'auth/user-not-found':
          return 'User not found';
        case 'auth/wrong-password':
          return 'Invalid password';
        case 'auth/invalid-email':
          return 'Invalid email address';
        case 'auth/user-disabled':
          return 'This account has been disabled';
        default:
          return 'Sign in failed. Please try again.';
      }
    }
    return 'An unexpected error occurred';
  }
}