import React from 'react'
import styled from 'styled-components'
import BoxProfil from '../components/BoxProfil'
import AnimationNetflix from '../components/AnimationNetflix'


const Profils = () => {
  return (
      <Wrapper>
        <AnimationNetflix></AnimationNetflix>
        <Titlep>Qui est-ce ?</Titlep>
        <Container>
          <BoxProfil
            name="Sanji"
            image="https://occ-0-55-56.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAAFP92LG24Bjr0WmsBn-3CwWkt8DrJ52qIos5LCFSn0pgagk2viZArG771qBNNkmT1MyP5E0ZdMEGaXB0gG_y1hf2Qrg.png?r=ee6"
          />
          <BoxProfil
            name="Luffy"
            image="https://occ-0-55-56.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAAFLnZCSArGpHLCeZF2525wT7UHzTS5CyduUxvNlgjKHtOy-4xvqMXvJhNOtFCR2KpZlXOQKtjENM4ThUX7uTnlh8ymA.png?r=8aa"
          />
          <BoxProfil
            name="Zoro"
            image="https://occ-0-55-56.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAAFMKu2OoV9YK1oIQKleukDD7NCSHhtan2Jd8uRe-D9zBqLkXpJs1aE5E410jRERZhwyVwcX-xCFE0fOCJbdOZgjuyAQ.png?r=abe"
          />
          <BoxProfil
            name="Ace"
            image="https://occ-0-55-56.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABeeUXj7Qv1mlz_6ihaRvwKNIj8ZUb16ZLq2CFm5d4P_6ekllUPz6u9wefDv9HMrk-xdyIigwh1XZjzFfAe7fGXxmWrMP.png?r=fdd"
          />
          <BoxProfil
            name="Sabo"
            image="https://occ-0-55-56.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABfKQX3GD92_it5CxSGbQbLUaes21NHll7a9jASfp89GAzF3wSUKb5WVgTNeTztGYJBsNZXsRaIJJkIaoAhqGW8oNpWzi.png?r=c71"
          />
        </Container>
      </Wrapper>
  )
}

const Wrapper = styled.section`

`;

const Titlep = styled.h2`
  color: white;
  font-size: 20px;
`;

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px 100px;
`;


export default Profils