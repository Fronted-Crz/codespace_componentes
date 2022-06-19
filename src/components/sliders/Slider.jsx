import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const SISTEMA_SOLAR = [
  {
    id: 1,
    title: 'Tierra',
    img: './public/imgs/earth.png',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in.',
  },
  {
    id: 2,
    title: 'Jupiter',
    img: './public/imgs/jupiter.png',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in.',
  },
  {
    id: 3,
    title: 'Marte',
    img: './public/imgs/mars.png',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in.',
  },
  {
    id: 4,
    title: 'Mercurio',
    img: './public/imgs/mercury.png',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in.',
  },
  {
    id: 5,
    title: 'Luna',
    img: './public/imgs/moon.png',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in.',
  },
  {
    id: 6,
    title: 'neptuno',
    img: './public/imgs/neptune.png',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in.',
  },
  {
    id: 7,
    title: 'Saturno',
    img: './public/imgs/saturn.png',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in.',
  },
  {
    id: 8,
    title: 'Urano',
    img: './public/imgs/uranus.png',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in.',
  },
  {
    id: 9,
    title: 'Venus',
    img: './public/imgs/venus.png',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in.',
  },
  {
    id: 10,
    title: 'Sol',
    img: './public/imgs/sun.png',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in.',
  },
];

function Slider() {
  return (
    <Section>
      <h1>Sistema Solar</h1>
      <DivConainer>
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          className="wrapper_imgs"
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          {SISTEMA_SOLAR.map(({ id, title, description, img }) => (
            <SwiperSlide key={id}>
              <Article>
                <h2>{title}</h2>
                <img style={{ maxWidth: '100%' }} src={img} alt="" />
                <p>{description}</p>
              </Article>
            </SwiperSlide>
          ))}
        </Swiper>
      </DivConainer>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #1a1640;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

const DivConainer = styled.div`
  width: 50%;
  margin: 0 auto;

  .swiper-pagination {
    position: initial;
    margin-top: 1rem;
  }

  .swiper-pagination-bullet-active {
    background-color: #fff;
    width: 1.5rem;
    border-radius: 5px;
  }
`;

const Article = styled.article`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: #4c2bc4;
  padding: 1rem 2rem;
  border-radius: 10px;
  h2,
  p {
    color: #fff;
  }
  h2 {
    text-transform: uppercase;
  }
  P {
    font-size: 0.8rem;
    line-height: 1rem;
  }
`;
export default Slider;
