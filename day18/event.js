class Menu {
  // 지시사항을 참고하여 코드를 작성하세요.
  handleEvent(evt) {
    console.log('전달받은 event', evt)
    console.log('instance 내에 생성된 global event', event)
    let method = "on" + evt.type[0].toUpperCase() + evt.type.slice(1);
    if (method === 'onMousedown') this.onMousedown();
    else if (method === 'onMouseup') this.onMouseup();
  }
  onMousedown(evt) {
    elem.innerHTML = '마우스 버튼을 눌렀습니다.'
    console.log('이벤트 객체를 전달받지는 못함', evt)
    console.log('onMousedown메소드', event)
  }
  onMouseup(evt) {
    elem.innerHTML = '마우스 버튼을 뗐습니다.'
    console.log('이벤트 객체를 전달받지는 못함.', evt)
    console.log('onMouseUp메소드', event)
  }
}

let menu = new Menu();
const elem = document.querySelector('button');
elem.addEventListener("mousedown", menu);
elem.addEventListener("mouseup", menu);