// 0: margin-left : 0px; (-400 * 0)
// 1: margin-left : -400px (-400 * 1)
// 2: margin-left : -800px (-400 * 2)
// 3: margin-left : -1200px (-400 * 3)
// 4: margin-left : -1600px (-400 * 4)

const frame = document.querySelector("main");
const panel = frame.querySelector(".panel");
const btns = frame.querySelectorAll(".btns li");

// 스크립트가 실행되자마자 panel의 넓이값과 높이값을 btns의 갯수에 따라 동적 스타일링
panel.style.width = (100 * btns.length) + "%";
panel.style.height = "100%";

// 스크립트가 실행되자마자 panel의 자식 li를 모두 찾은 다음 반복을 돌며 btns의 개수에 따라 넓이, 높이 동적 스타일링
panel.querySelectorAll("li").forEach((li) => {li.style.width = (100 / btns.length)+"%";
    li.style.height = "100%";
});


btns.forEach((btn,idx) => {
    btn.addEventListener("click", () => {
        console.log(idx);
        // new Anime (panel, {marginLeft:-400*idx}, {duration:600});
        // marinLeft는 고정값일 경우에만 적용됨
        new Anime (panel, {left:( -100 * idx ) + "%"}, {duration:600});
    });
});


// idx 숫자 곱하기 width 값만큼 움직이기
// width 퍼센테이지로 바꾸기
// script에서 width값 지정