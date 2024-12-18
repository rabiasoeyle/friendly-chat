import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"friendly-chat-3cbaa","appId":"1:5103900357:web:3b7252f5689f6c0ae002ac","databaseURL":"https://friendly-chat-3cbaa-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"friendly-chat-3cbaa.firebasestorage.app","apiKey":"AIzaSyCXEtbV4sj5df8F88p6zzZt7GEalzuuLwE","authDomain":"friendly-chat-3cbaa.firebaseapp.com","messagingSenderId":"5103900357"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideMessaging(() => getMessaging())]
};
