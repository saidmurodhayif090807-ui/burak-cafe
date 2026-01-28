import React from 'react';
import './MyPage.scss';
import profileImg from './helloworld/jasjan.png'; // Profil rasm shu papkaga qo'yilsin

function MyPage() {
  return (
    <div className="profile-wrapper mypage_container">
      {/* Form qismi */}
      <div className="form-section">
        <div className="upload">
          <img src={profileImg} alt="Profile" className="profile-img" />
          <div className="upload-text">
            <p>Upload image</p>
            <span>JPG, JPEG, PNG format only!</span>
          </div>
          <button className="upload-btn">📤</button>
        </div>

        <input type="text" placeholder="Justin" className="input-field" />

        <div className="row">
          <input type="text" placeholder="8210 2469 4424" className="input-field small" />
          <input type="text" placeholder="South Korea, Busan" className="input-field small" />
        </div>

        <textarea placeholder="The best man" className="textarea-field"></textarea>

        <button className="save-btn">SAVE</button>
      </div>

      {/* Profil karta qismi */}
      <div className="card-section">
        <div className="card">
          <img src={profileImg} alt="Justin" className="card-img" />
          <h3>Justin</h3>
          <span className="role">USER</span>
          <p className="location">South Korea, Busan</p>
          <div className="socials">
            <span>📘</span>
            <span>📸</span>
            <span>✈️</span>
            <span>✉️</span>
          </div>
          <p className="description">The best man</p>
        </div>
      </div>
    </div>
  );
}

export default MyPage;


