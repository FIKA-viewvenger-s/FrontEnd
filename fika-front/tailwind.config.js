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
        blue: {
          primary: "#5C85EC",
          hover: "#3862CD",
          80: "#3862CD",
          90: "#3862CD",
          100: "#3862CD",
        },
        gray: {
          10: "F4F7FB",
          20: "EAEEF5",
          30: "D9E3F0",
          40: "B7BECD",
          50: "9DA5B4",
          60: "8690A2",
          70: "646E82",
          80: "4B5362",
          90: "383D48",
          100: "263038",
          bg: "1C1E28"
        },
        "main-bg-color": "#11161B",
        "page-menu-bg-color": "#171921",
        "light-gray-text-color": "#888C9B",
        "tab-selection-color": "#ADE64C",
        "tab-bg-color": "#1C1E28",
        customscrollbar: {
          thumbGray: "#383d48"
        }
      },
      height: {
        13: "50px",
        130.75: "523px",
      },
      padding: {
        7.5: "30px",
      },
      width: {
        158: "632px",
      },
      borderRadius: {
        3.75: "15px",
      },
      fontSize: {
        17.5: "70px",
        bold: ['30px', { fontWeight: 700, lineHeight: '1.25' }],
        regular: ['18px', { fontWeight: 400, lineHeight: '1.5' }],
        medium: ['15px', { fontWeight: 400, lineHeight: '1.5' }],
        caption: ['11px', { fontWeight: 600, lineHeight: '1.5' }],
        buton: ['24px', { fontWeight: 400, lineHeight: '24px' }],
      },

      /** NOTE:  */

    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
