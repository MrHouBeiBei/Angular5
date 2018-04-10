import { Component, OnInit } from "@angular/core";
import { TestService } from "../../share/test.service";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {
  // data = {
  // params: {
  //   pageSize: 5,
  //   pageNum: 1,
  // }
  // }

  constructor(private testService: TestService) {}

  ngOnInit() {
    // console.log(this.testService)
    // this.testService.test().subscribe( rt => {
    //   console.log(rt)
    // })

    // post
    let data = {
      params: {
        pageSize: 5,
        pageNum: 1
      }
    };
    this.testService.test(data).then(rt => {
      console.log(rt);
    });

    //get
    let data2 = {
      body: {
        pageSize: 5,
        pageNum: 1
      }
    };
    this.testService.test2(data2).then(rt => {
      console.log(rt);
    });


    ///ts class
    class Animal {
        name: string;
      constructor(name) {
        this.name = name;
      }
      move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
      }
    }

    class Dog extends Animal {
      constructor(name: string) {
        super(name)
      }
      bark() {
        console.log("Woof! Woof!");
        super.move(20)
      }
    }

    const dog = new Dog('test');
    dog.bark();
    dog.move(10);
    console.log(dog.name)
  }
}
