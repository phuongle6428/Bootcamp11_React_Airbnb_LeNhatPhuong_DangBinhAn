import styled from "styled-components";


export default function Banner() {
  return (
    <BannerSection>
      <span>
        <h2>Bạn chưa biết nên đi đâu ?Tuyệt.</h2>
        <a href="#" className="btn btn-dark">
          {"Tìm kiếm linh hoạt"}
        </a>
      </span>
    </BannerSection>
  );
}

const BannerSection = styled.section`
  margin-top: 60px;
  padding: 6rem 3rem;
  background: url(/images/banner.jpg);
  background-size: cover;
  border-radius: 1rem;
  color: #3f3f1a;
  span {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 40%;
  }
  h2 {
    font-size: clamp(1.75rem, 3vw, 2.25rem);
    line-height: 1.2;
    margin-bottom: 1.5rem;
    font-weight: 800;
  }
  .btn.btn-dark {
    background-color: #3f3f1a;
    color: #ffffd6;
  }

  @media (max-width: 36rem) {
    aspect-ratio: 0.75;
    background: url(images/banner-sm.jpg);
    background-size: cover;
    background-position: center;

    span {
      align-items: center;
      text-align: center;
    }
  }
`;
