import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../counter.action';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrl: './my-counter.component.css'
})
export class MyCounterComponent {
  count$ : Observable<number>

  constructor ( private store : Store<{count: number}>) {
    this.count$ = this.store.select("count")
  }

  increment (){
this.store.dispatch(increment());
  }

  decrement () {
    this.store.dispatch(decrement());
  }

  reset () {
    this.store.dispatch(reset());

  }
}
