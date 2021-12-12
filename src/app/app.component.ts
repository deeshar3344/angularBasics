import { Component, OnInit } from '@angular/core';
import {
  Observable,
  of,
  interval,
  fromEvent,
  timer,
  combineLatest,
  concat,
  forkJoin,
  merge,
} from 'rxjs';
import { concatAll, first, map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'my-app';

  findFrequentNumberInArray(numArray: number[]): number {
    numArray.sort();
    let maxCount = 1;
    let frequentNumber = numArray[0];
    let currentCount = 1;
    for (let i = 1; i < numArray.length; i++) {
      if (numArray[i] === numArray[i - 1]) {
        currentCount++;
      } else {
        if (currentCount > maxCount) {
          maxCount = currentCount;
          frequentNumber = numArray[i - 1];
          currentCount = 1;
        }
      }
    }

    // If last element is most frequent
    if (currentCount > maxCount) {
      maxCount = currentCount;
      frequentNumber = numArray[numArray.length - 1];
    }
    return frequentNumber;
  }

  // problem 1
  covertVariable(str: string) {
    if (str.length === 0) {
      return str;
    }
    const strArr = str.split('');
    let convertedStr = '';
    let isJavaVar: boolean = false;
    let isCVar: boolean = false;
    for (let j = 0; j < strArr.length; j++) {
      if (strArr[j] === '_') {
        isCVar = true;
        break;
      } else if (strArr[j] === strArr[j].toUpperCase()) {
        isJavaVar = true;
        break;
      }
    }

    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i] === '_' && isCVar) {
        i++;
        convertedStr += strArr[i].toUpperCase();
      } else if (strArr[i] === strArr[i].toUpperCase() && isJavaVar) {
        convertedStr += `_${strArr[i].toLowerCase()}`;
      } else {
        convertedStr += strArr[i];
      }
    }
    return convertedStr;
  }

  //problem 2
  characterFrequencyCount(inputString: string): string {
    if (inputString.length === 0) {
      return inputString;
    }
    let alphabetArr = new Array(26);
    alphabetArr.fill(0);
    alphabetArr = alphabetArr.map((e, i) =>
      String.fromCharCode(i + 65).toLowerCase()
    );
    console.log(alphabetArr);
    let strArr: string[] = inputString.split('');
    let result = '';
    for (let i = 0; i < alphabetArr.length; i++) {
      let count = 0;
      for (let j = 0; j < strArr.length; j++) {
        if (alphabetArr[i] === strArr[j]) {
          count++;
        }
      }
      if (count > 0) {
        result += `${alphabetArr[i]}${count}`;
      }
    }
    return result;
  }

  majorityElement(inputArr: any[]): number {
    let maxCount = 0;
    let index = 0;
    for (let i = 0; i < inputArr.length; i++) {
      let count = 0;
      for (let j = 0; j < inputArr.length; j++) {
        if (inputArr[i] === inputArr[j]) {
          count++;
        }
        if (count > maxCount) {
          maxCount = count;
          index = i;
        }
      }
    }
    if (maxCount > inputArr.length / 2) {
      return inputArr[index];
    } else {
      return -1;
    }
  }

  ngOnInit() {
    // console.log(this.findFrequentNumberInArray([1, 2, 3, 1, 4, 5, 6, 1, 2, 3]));
    //console.log(this.findFrequentNumberInArray([5, 4, 3, 2, 1]));
    console.log(this.covertVariable('modify_variableName'));
    console.log(this.covertVariable('this_is_a_variable'));
    console.log(this.covertVariable('thisIsAVariable'));

    console.log(this.characterFrequencyCount('phqgh'));

    // console.log(this.majorityElement([1, 2, 1]));
    //console.log(this.majorityElement([1, 2, 1, 2]));
    console.log(this.majorityElement([1, 2, 1, 2, 1]));
    console.log(this.majorityElement([1, 2, 1, 2, 1, 2, 2]));
    // let a :unknown;
    // a = 1;
    // a= '3';
    // const observable: Observable<any> = new Observable(function subscribe(
    //   subscriber
    // ) {
    //   subscriber.next(of(1, 2, 3));
    //   subscriber.next(of(1, 2, 3));
    // });

    // let inter = interval(1000)
    // inter.subscribe(data => console.log(data))

    // let fromEvt = fromEvent(window, 'click')
    // fromEvt.subscribe(data => console.log(data))

    // let tim = timer(3000)
    // tim.subscribe(data => console.log('tim', data))

    // const firstTimer = timer(0, 1000); // emit 0, 1, 2... after every second, starting from now
    // const secondTimer = timer(5000, 1000); // emit 0, 1, 2... after every second, starting 5s from now
    // const combinedTimers = combineLatest([firstTimer, secondTimer]);
    // combinedTimers.subscribe(value => console.log(value));

    //const firstTimer = timer(0, 1000); // emit 0, 1, 2... after every second, starting from now
    //const secondTimer = timer(5000, 1000); // emit 0, 1, 2... after every second, starting 5s from now
    // const firstTimer = of(1, 2, 3);
    // const secondTimer =of(4, 5, 6);
    // const combinedTimers = forkJoin([firstTimer, secondTimer]);
    // combinedTimers.subscribe(value => console.log(value));

    // const timer1 = interval(1000).pipe(take(10));
    // const timer2 = interval(2000).pipe(take(6));
    // const timer3 = interval(500).pipe(take(10));
    // const concurrent = 2; // the argument
    // const merged = merge(timer1, timer2, timer3, concurrent);
    // merged.subscribe(x => console.log(x));
  }
}
