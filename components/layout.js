import BaseButton from './BaseButton'
import ButtonNoFill from './ButtonNoFill'
export default function Layout({children}) {
  return (
    <div>
      {children}
      <ButtonNoFill>Giris Yap</ButtonNoFill>
      <BaseButton>KayıtOl</BaseButton>
    </div>);
}

