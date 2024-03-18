import React, { useState } from 'react';
import QRCode from 'qrcode';

const Context = () => {
  const [qrCodeData, setQRCodeData] = useState('');
  const [qrCodeImage, setQRCodeImage] = useState('');

  const handleInputChange = (event) => {
    setQRCodeData(event.target.value);
  };

  const generateQRCode = () => {
    QRCode.toDataURL(qrCodeData, (err, url) => {
      if (err) {
        console.error(err);
        return;
      }
      setQRCodeImage(url);
    });
  };

  return (
    <div>
      <h2>Welcome to Thoai</h2>
      <p>Hãy đổ dữ liệu bạn muốn vào đây.</p>
      <input type="text" value={qrCodeData} onChange={handleInputChange} />
      <button onClick={generateQRCode}>Tạo mã QR</button>
      {qrCodeImage && <img src={qrCodeImage} alt="QR Code" />}
    </div>
  );
};

export default Context;