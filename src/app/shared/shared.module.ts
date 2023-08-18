import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBtnComponent } from './components/my-btn/my-btn.component';

@NgModule({
  declarations: [MyBtnComponent],
  imports: [CommonModule],
  exports: [MyBtnComponent],
})
export class SharedModule {}
