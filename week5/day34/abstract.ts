abstract class Student {
  // 자식 class에서 공통적으로 사용하는 부분을 템플릿 메서드라 합니다.
  public study() {
    console.log("공부 시작!");
    // 자식 class에서 각자 다른 메소드가 구현되는 takeABreak 메소드를 구현해주세요.
    this.takeABreak();
    // 추상 class의 this는 추상 클래스로 확장되는 class 인스턴스를 가리킨다.
    console.log("공부 종료!");
  }

  abstract takeABreak(): void;
}


class Alice extends Student {
  takeABreak(): void {
    console.log("잠자며 휴식!");
  }
}

class June extends Student {
  takeABreak(): void {
    console.log("커피 한잔하며 휴식!");
  }
}

class Chloe extends Student {
  takeABreak(): void {
    console.log("산책하며 휴식!");
  }
}



const alice = new Alice();
alice.study();


const june = new June();
june.study();

const chloe = new Chloe();
chloe.study();