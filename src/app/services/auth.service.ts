import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {}

  // Sign in method
  async signIn(email: string, password: string): Promise<void> {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      if (result.user) {
        this.router.navigate(['/home']);
      }
    } catch (error) {
      throw error;
    }
  }

  // Sign out method
  async signOut(): Promise<void> {
    try {
      await this.afAuth.signOut();
      this.router.navigate(['/signin']);
    } catch (error) {
      throw error;
    }
  }

  // Get auth state
  getAuthState(): Observable<firebase.User | null> {
    return this.afAuth.authState;
  }

  // Get current user
  getCurrentUser(): Promise<firebase.User | null> {
    return this.afAuth.currentUser;
  }
}