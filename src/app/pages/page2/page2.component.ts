import { ChangeDetectionStrategy, ChangeDetectorRef, Component, importProvidersFrom, inject } from '@angular/core';

@Component({
    selector: 'app-page2',
    imports: [],
    templateUrl: './page2.component.html',
    styleUrl: './page2.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Page2Component {
  changeDetector= inject(ChangeDetectorRef);
  countNumber = 0;
  constructor() {
    setTimeout(()=>{
      this.countNumber++;
      // this.changeDetector.detectChanges()
    },1500)
  }
  updateCount(){
    this.countNumber++;
  }
}
