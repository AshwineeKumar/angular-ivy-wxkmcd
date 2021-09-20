import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  initialIdValue = 100;
  candidates = [
    {
      id: this.initialIdValue,
      firstName: 'Alok',
      lastName: 'Gautam',
      email: 'alokg@gmail.com',
      gender: 'Male',
    },
  ];
  candidateModel: any = {};
  searchString = '';
  allData: any;
  isMaleChecked: boolean = true;
  isFemaleChecked: boolean = true;

  ngOnInit() {
    this.allData = this.candidates;
  }

  saveForm() {
    this.candidateModel['id'] = ++this.initialIdValue;
    this.candidates.push(this.candidateModel);
    this.allData = this.candidates;
    console.log('log==', this.candidateModel);
  }

  filterData() {
    debugger;
    console.log('this.searchString==', this.searchString);
    console.log('isMaleChecked=', this.isMaleChecked);
    console.log('isFemaleChecked=', this.isFemaleChecked);
    if (!this.candidates || !this.searchString) {
      this.candidates = this.allData;
    } else {
      this.candidates = this.candidates.filter((item) => {
        return item.firstName
          .toLocaleUpperCase()
          .includes(this.searchString.toLocaleUpperCase());
      });
    }
  }
}
