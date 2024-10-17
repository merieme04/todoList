import { Component } from '@angular/core';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  checkCircleIcon = CheckCircleIcon;
  
  tasks = [
    { 
      name: 'Acheter du lait', 
      done: false,
      description: 'Aller au supermarché pour acheter du lait pour le petit déjeuner.'
    },
    { 
      name: 'Faire le ménage', 
      done: true,
      description: 'Nettoyer la maison, passer l\'aspirateur et essuyer les surfaces.'
    },
    { 
      name: 'Terminer le projet Angular', 
      done: false,
      description: 'Finaliser le projet Angular avec l\'intégration des fonctionnalités restantes.'
    }
  ];
    futureDays: Date[] = [];

  constructor() {
    this.initializeFutureDays();
  }

  // Initialiser la liste des jours suivants (ex : 7 jours)
  initializeFutureDays() {
    const today = new Date();
    for (let i = 1; i <= 7; i++) {
      const nextDay = new Date();
      nextDay.setDate(today.getDate() + i);
      this.futureDays.push(nextDay);
    }
  }

}
