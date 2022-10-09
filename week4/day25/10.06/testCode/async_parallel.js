function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function getApple() {
    await delay(1000);
    return "apple";
}

async function getBanana() {
    await delay(1000);
    return "banana";
}

// 직렬 처리
async function pickFruits() {
    const apple = await getApple(); //1초 기다리고 실행
    const banana = await getBanana(); //1초 기다리고 실행

    console.log(`${apple} + ${banana}`);
}

pickFruits();

// // 병렬처리
// // Promise성질 이용
// async function pickFruits2() {
//     const applePromise = getApple(); //Promise 객체 안 코드 블록 바로실행
//     const bananaPromise = getBanana(); //Promise 객체 안 코드 블록 바로실행
//     const apple = await applePromise;
//     const banana = await bananaPromise;

//     console.log(`${apple} + ${banana}`);
// }

// pickFruits2();

// // Promise.all 이용
// async function getFruites3() {
//     console.time();
//     let [apple, banana] = await Promise.all([getApple(), getBanana()]); // 구조 분해로 각 프로미스 리턴값들을 변수에 담는다.
//     console.log(`${apple} + ${banana}`);
// }

// getFruites3();
