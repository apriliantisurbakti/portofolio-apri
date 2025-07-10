
import gambar1 from "/gambar1.jpg";


function Profile() {
  return (
    <div className="profile">
      <img src={gambar1} alt="APRILIANTI" className="profile-img" />
      <div className="profile-desc">
        <h1>APRILIANTI BR SURBAKTI</h1>
        <p>
          Saya Seorang mahasiswa S1 Informatika di Universitas Satya Terra Bhinneka.
          Saya adalah mahasiswa kip kuliah, yang dimana saya harus banyak belajar agar saya mendapatkan ipk yang bagus.
          Saya terlahir dari keluarga yang kurang mampu, jadi dengan ada nya bantuan kip kuliah ini saya ingin mengangkat derajat orang tua saya 
          agar tidak dipandang sebelah mata sama orang yang mengangap kami kecil.
        </p>
      </div>
    </div>
  );
}

export default Profile;