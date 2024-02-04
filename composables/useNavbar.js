import { ref, reactive } from "vue";

export const scrolling = reactive({
  down: false,
  up: false,
});

let lastScrollTop = 0;

export const handleScroll = () => {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    // downscroll
    scrolling.down = true;
    scrolling.up = false;
  } else {
    // upscroll
    scrolling.down = false;
    scrolling.up = true;
    if (st == 0) {
      //  reset
      scrolling.down = false;
      scrolling.up = false;
    }
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
};
