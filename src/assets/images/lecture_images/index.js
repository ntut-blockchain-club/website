// import a from './244250194_619260522784387_3846695070070077289_n.jpg';
// import b from './245085662_624106118966494_5886653939517993746_n.jpg';
// import c from './247131170_628287638548342_6783307084412794194_n.jpg';
// import d from './247327338_633352121375227_2291088415219560230_n.jpg';
// import e from './259267154_647121379998301_641317980307923943_n.jpg';
// import f from './260786976_655651112478661_3793525060000939618_n.png';
// import g from './261718191_652811086095997_3719980875985288136_n.png';
// import h from './267124796_661689141874858_678452379211197180_n.jpg';
// import i from './267201253_664205564956549_6410232227184862184_n.png';
// import j from './269816544_669445971099175_7462272936417528636_n.jpg';
// import k from './271126210_674946690549103_3102729395414598911_n.png';
// import l from './274490569_707377957305976_3955188090984417142_n.png';
// import m from './276307687_723873822323056_1455906798893368796_n.jpg';
// import n from './277149395_726101245433647_6140160890252280210_n.jpg';
// import o from './279056736_747779416599163_5701844211471894715_n.png';
// import p from './279894645_752558769454561_7377425800814004943_n.png';
// import q from './281636844_760368405340264_5642498360176135968_n.png';
// import r from './283577742_769818781061893_6035360143345068243_n.png';
// import s from './284974273_773515654025539_7241389829121860136_n.png';

// export {
//     a,
//     b,
//     c,
//     d,
//     e,
//     f,
//     g,
//     h,
//     i,
//     j,
//     k,
//     l,
//     m,
//     n,
//     o,
//     p,
//     q,
//     r,
//     s
// };

// React component
import React from 'react';

function Images() {
  // 取得所有照片的檔名
  const photoFilenames = require.context('./', false, /\.(jpg|jpeg|png)$/);

  return (
    <div className="end_lecture_photos">
      {/* 將每一張照片都顯示在一個 div 之中 */}
      {photoFilenames.keys().map((filename) => (
        <div key={filename}>
          <img src={photoFilenames(filename)} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Images;