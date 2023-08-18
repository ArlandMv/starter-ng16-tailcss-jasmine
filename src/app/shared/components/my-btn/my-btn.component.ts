import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-btn',
  template: `
    <button
      class="flex-shrink-0 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg mt-10 sm:mt-0"
    >
      {{ title }}
    </button>
  `,
  styles: [],
})
export class MyBtnComponent implements OnInit {
  @Input() title: String = 'btn-title';

  ngOnInit(): void {}
}
