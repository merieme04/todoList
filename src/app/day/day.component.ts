import { Component, Input } from '@angular/core';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css'] // Corrigez "styleUrl" en "styleUrls"
})
export class DayComponent {
  @Input() day!: Date;

  checkCircleIcon = CheckCircleIcon;
}
