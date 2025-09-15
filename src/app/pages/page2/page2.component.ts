import { ChangeDetectorRef, Component, inject, Injector, signal } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  imports: [],
  standalone: true,
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css',
})
export class Page2Component {
  changeDetector = inject(ChangeDetectorRef);
  countNumber = 0;
  countNumberSignal = signal<number>(0);

  constructor(injector: Injector, public router: Router) {
    setTimeout(() => {
      this.countNumber++;
      /**
       * chỗ này do bản chất bỏ zone đi (zoneless) thì sẽ không chạy cd
       * cho các hàm interval và timeout (bất đồng bộ) nên muốn nó chạy cd
       * lại thì cần phải cần cờ yêu cầu chạy lại cd thêm lần nữa.
       * nên là chỗ này có thể dùng lại cờ markForCheck() để chạy cd
       * thay vì dùng detectChange() để cd force cho chính nó và các
       * thằng dom/ component  phụ thuộc
       */
      this.countNumberSignal.update(x => x++)
      this.changeDetector.markForCheck();
    }, 1500)


    const PopupElement = createCustomElement(Page2Component, {injector});
    // Register the custom element with the browser.
    if (!customElements.get('popup-element')) {
      customElements.define('popup-element', PopupElement);
    }
  }

  updateCount() {
    this.countNumber++;
  }

  routerBack() {
    this.router.navigateByUrl('/').then()
  }
}
