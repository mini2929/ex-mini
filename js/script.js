// 0: margin-left : 0px; (-400 * 0)
// 1: margin-left : -400px (-400 * 1)
// 2: margin-left : -800px (-400 * 2)
// 3: margin-left : -1200px (-400 * 3)
// 4: margin-left : -1600px (-400 * 4)

const frame = document.querySelector('main');
const panel = frame.querySelector(".panel");
const btns = frame.querySelectorAll(".btns li");

btns.forEach((btn,idx) => {
    btn.addEventListener("click", () => {
        console.log(idx);
    });
});

// li 태그 안쪽 값 불러오기 getAttribute
// idx 숫자 곱하기 width 값만큼 움직이기