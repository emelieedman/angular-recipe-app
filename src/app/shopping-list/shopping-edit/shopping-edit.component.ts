import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput;
  @ViewChild('amountInput') amountInput;
  @Output('onSubmit') onSubmit = new EventEmitter<object>();

  constructor() {}

  ngOnInit(): void {}

  onSubmitEvent() {
    this.onSubmit.emit({
      nameInput: this.nameInput.nativeElement.value,
      amountInput: this.amountInput.nativeElement.value,
    });
  }
}
