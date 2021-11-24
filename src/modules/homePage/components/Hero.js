import styled from "styled-components";

export default function Hero() {
  return (
    <HeroSection className="light hero">
      <div className="heroInner">
        <span>
          <h2>Khám phá 50+ mục nâng cấp sắp ra mắt trong Bản phát hành mùa đông năm 2021.</h2>
          <a href="#" className="btn btn-light">
            Trải nghiệm ngay
          </a>
        </span>
      </div>
    </HeroSection>
  );
}

const HeroSection = styled.section`
  background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent 10rem),url(/images/airbnb2021.jpg);
  background-position: center, bottom left;
  background-size: cover, cover;
  height: fit-content;
  color: #e0565b;
  padding: 15rem 3rem 6rem;

  .heroInner {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
  }

  span {
    max-width: 40%;
  }

  h2 {
    font-weight: 900;
    font-size: clamp(2rem, 5.5vw, 3.25rem);
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 36rem) {
    background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent),
      url(images/airbnb2021.jpg);
    background-position: center, bottom left;
    background-size: cover, cover;
    align-items: flex-start;
    padding-top: 7.5rem;
    height: 75vh;
    max-height: 720px;
  }
`;
