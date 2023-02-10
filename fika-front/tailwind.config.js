module.exports = {
  content: ["src/**/*.@(j|t)s?(x)", "stories/**/*.@(j|t)s?(x)"],
  theme: {
    // 지정된 색상
    // ex) colors: {
    //     blue: {
    //         100: '#ECF6FF',
    //         200: '#2D9CDB'
    //         }
    //     }
    extend: {
      // 기존 tailwind에서 지정해놓은 값을 변경해야할 경우, 또는 확장해서 사용할경우
      // ex) 기존값 변경 또는 추가시 (tailwind 기본값은 4 단위로 이루어져있음 => tailwind의 2는 '8px'을 의미)
      // height : {
      //     2.25 : '9px',
      //     2.5 : '10px',
      //     2.75 : '11px',
      // },
      // maxWidth: {
      //     sm : '350px',
      //     xs : '200px',
      // },
      // ex) 확장해서 사용할경우
      // fontSize: {
      //     base: ['16px', {fontWeight:400, lineHeight:'24px'}],
      //     body: ['14px', {fontWeight:400, lineHeight:'20px'}],
      // }
      colors: {
        'main-bg-color': '#11161B',
        'page-menu-bg-color': '#171921',
        'light-gray-text-color': '#888C9B'
      }
    },
  },
  plugins: [],
};
