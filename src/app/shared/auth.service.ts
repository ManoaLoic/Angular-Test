import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // propriété pour savoir si l'utilisateur est connecté
  loggedUser: any;
  users = [
    {
      email: 'test@gmail.com',
      password: 'test1234',
      isAdmin: false,
    },
    {
      email: 'admin@gmail.com',
      password: 'admin1234',
      isAdmin: true,
    }
  ];

  constructor() { }

  // méthode pour connecter l'utilisateur
  // Typiquement, il faudrait qu'elle accepte en paramètres
  // un nom d'utilisateur et un mot de passe, que l'on vérifierait
  // auprès d'un serveur...
  logIn(email: string, password: string) {
    const user = this.users.find(item => item.email === email && item.password === password);
    if(user){
      this.loggedUser = user;
      return true;
    }
    return false;
  }

  loggedIn() :boolean{
    return this.loggedUser;
  }

  // méthode pour déconnecter l'utilisateur
  logOut() {
    this.loggedUser = null;
  }

  // methode qui indique si on est connecté en tant qu'admin ou pas
  // pour le moment, on est admin simplement si on est connecté
  // En fait cette méthode ne renvoie pas directement un booleén
  // mais une Promise qui va renvoyer un booléen (c'est imposé par
  // le système de securisation des routes de Angular)
  //
  // si on l'utilisait à la main dans un composant, on ferait:
  // this.authService.isAdmin().then(....) ou
  // admin = await this.authService.isAdmin()
  isAdmin() {
    const promesse = new Promise((resolve, reject) => {
      // ici accès BD? Web Service ? etc...
      resolve(this.loggedUser?.isAdmin);
      // pas de cas d'erreur ici, donc pas de reject
    });

    return promesse;
  }
}
