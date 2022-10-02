const AlphabetCounter = {
  sentence: "",
  alphabetMap: {},

  setSentence: function (sentence) {
    this.sentence = sentence;
    return this;
  },

  buildAlphabetMap: function () {
    const sentence = this.sentence.trim().toLowerCase().split("").filter(x => x.charCodeAt() >= 97 && x.charCodeAt() <= 122);
    this.alphabetMap = {};
    for (let i = 0; i < sentence.length; i++) {
      this.alphabetMap[sentence[i]] = (this.alphabetMap[sentence[i]] || 0) + 1
    }
    // this.alphabetMap = this.sentence.trim().toLowerCase().split("").filter(x => x >= "a" && x <= 122).reduce((pre, cur) => {
    // pre[cur] = (pre[cur] || 0) + 1
    // return pre;
    // }, {})
    // this.sentence 로부터 알파벳 맵을 만들어
    // this.alphabetMap에 저장하세요.
    return this;
  },

  buildResult: function () {
    // Object.entries()를 활용하여[a: 1][b: 2] 형태의 문자열을 만들어보세요.
    const entries = Object.entries(this.alphabetMap).map(x => `[${x[0]}: ${x[1]}]`);
    const resultString = entries.join(" ").trim();
    // const entries = Object.entries(this.alphabetMap).reduce((acc, [key, value]) => {
    //   return `${acc} [${key}: ${value}]`
    // }, "").trim();
    // const resultString = entries;
    return `결과는 : ${resultString} 입니다.`;
  },
};

export default AlphabetCounter;