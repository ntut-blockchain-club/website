
// React component
import React from 'react';

function Images() {
  // 取得所有照片的檔名
  const photoFilenames = require.context('./', false, /\.(jpg|jpeg|png|webp)$/);

  return (
    <div className="end_lecture_photos">
      {/* 將每一張照片都顯示在一個 div 之中 */}
      {photoFilenames.keys().map((filename) => (
        <div key={filename}>
          <img src={photoFilenames(filename)} alt="" loading="lazy"/>
        </div>
      ))}
    </div>
  );
}

export default Images;