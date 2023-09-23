import Logo from '../../assets/Logo.svg'
import EffectLeft from '../../assets/effectLeft.svg'
import EffectRight from '../../assets/effectRigth.svg'

import { Effect, HeaderContainer } from './styled'

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <Effect>
          <img src={EffectLeft} alt="" />
        </Effect>
        <img src={Logo} alt="" />
        <Effect>
          <img src={EffectRight} alt="" />
        </Effect>
      </HeaderContainer>
    </div>
  )
}
