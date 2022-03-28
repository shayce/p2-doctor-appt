import { Component, OnInit } from '@angular/core';
import { Appointment } from '../Appointment';
import { AppointmentsService } from '../appointments.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  public successMsg!: string;
  public errorMsg!: string;
  public appointmentDate!: string;
  public name!: string;
  public email!: string;

  constructor(private appointmentService: AppointmentsService) { }

  ngOnInit(): void {
  }

    createAppointment(){
      this.successMsg = '';
      this.errorMsg = '';
      this.appointmentService.createAppointment(this.appointmentDate, this.name, this.email);
        .subscribe((createdAppointment: Appointment) =>{
          this.appointmentDate = '';
          this.name = '';
          this.email = '';
          const appointmentDate = new Date(createdAppointment.appointmentDate).toDateString();
          this.successMsg = 'Appointment Booked Successfully for ${appointmentDate}';
        },
        (error: ErrorEvent) => {
          this.errorMsg = error.error.message;
        })
    }
     
}


function subscribe(arg0: (createdAppointment: Appointment) => void, arg1: (error: ErrorEvent) => void) {
  throw new Error('Function not implemented.');
}

