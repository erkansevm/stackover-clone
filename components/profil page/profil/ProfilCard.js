import styles from './ProfilCard.module.css';
const ProfilCard = () => {
  return (
    <>
      <div className={styles.card}>
        <img
          src="https://images.pexels.com/photos/4906334/pexels-photo-4906334.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="profil-image"
        />
        <h1>Ahmet Furkan Sevim</h1>
        <h2>Front-end Developer</h2>
        <h3>@ahmetfurkans</h3>
        <div className={styles.links}>
          <i className="fab fa-twitter-square"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-facebook-square"></i>
        </div>

        <button className={styles.button}>Edit Profile</button>
      </div>
    </>
  );
};

export default ProfilCard;
