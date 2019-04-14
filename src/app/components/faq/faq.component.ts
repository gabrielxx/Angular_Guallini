import { Component, OnInit } from '@angular/core';
import { FaqService } from '../../providers/faq.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.less']
})
export class FaqComponent implements OnInit {
  
  public Faqs: Observable<any[]>;

  constructor(public _FaqService : FaqService) { }

  ngOnInit() {
    this.Faqs = this._FaqService.onLoadFaqs();
  }

}
