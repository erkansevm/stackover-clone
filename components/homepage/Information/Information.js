import styles from './Information.module.css';

function Information() {
  return (
    <>
      <div className={styles.container}>
        <h1>Doğru cevaplara ulaşmak için</h1>
        <ul>
          <li>İçeriği anlatan başlık bul</li>
          <li>Doğru konu etiketi kullan</li>
          <li>Göresellerle detaylandır</li>
        </ul>
      </div>
    </>
  );
}

export default Information;
