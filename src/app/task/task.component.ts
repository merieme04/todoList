import { Component, Input } from '@angular/core';
import ToggleOnIcon from '@mui/icons-material/ToggleOn'; // Importer ToggleOnIcon
import ToggleOffIcon from '@mui/icons-material/ToggleOff';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task: { name: string, description: string, done: boolean } = {
    name: '', done: false,
    description: ''
  };
  
  toggleOnIcon = ToggleOnIcon; // Utiliser ToggleOnIcon
  toggleOffIcon = ToggleOffIcon;

  backgroundColor: string = this.getRandomColor();
  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


  toggleTaskStatus() {
    this.task.done = !this.task.done;
  }
}
