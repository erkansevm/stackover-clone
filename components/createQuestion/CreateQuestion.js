import Detay from './Detay'
import Etiketler from './Etiketler'
import Etiket from './Etiket'
import Title from './Title'
import InfoBox from './InfoBox'
import ButtonNoRadius from './ButtonNoRadius'
import styles from './create-question.module.css'


export default function HomePage() {
  return (
   <div className={styles.container}>
     <Title>Örn: for kullanmadan bir dizinin elemanlarına nasıl ulaşırım ?</Title> 
      <Detay></Detay>
      <Etiketler> 
        <Etiket>javascirpt</Etiket>
      </Etiketler>
       <Etiketler /> 
       <ButtonNoRadius>Paylaş</ButtonNoRadius>
   </div>
  );
}