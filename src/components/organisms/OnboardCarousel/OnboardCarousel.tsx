import { Text } from '@/components/atoms';
import Image from 'next/image';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './OnboardCarousel.module.scss';

export interface OnboardCarouselType {
  title: string;
  description: string;
  src: string;
}

export interface OnboardCarouselProps {
  items: OnboardCarouselType[];
}

const OnboardCarousel: React.FC<OnboardCarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };

  const handleImageChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.OnboardCarousel}>
      <div className={styles.OnboardCarousel_container}>
        <Carousel
          onChange={handleImageChange}
          showThumbs={false}
          infiniteLoop={true}
          swipeable={true}
          selectedItem={activeIndex}
          showStatus={false}
          showIndicators={false}
          showArrows={false}
        >
          {items?.map((item, index) => {
            return (
              <div key={index}>
                <Image
                  width={340}
                  height={240}
                  src={item.src}
                  alt={item.title}
                />
                {item.title && (
                  <Text
                    className={styles.OnboardCarousel_title}
                    label={item.title}
                    type="p"
                  />
                )}

                {item.description && (
                  <Text
                    className={styles.OnboardCarousel_description}
                    type="p"
                    label={item.description}
                  />
                )}
              </div>
            );
          })}
        </Carousel>

        <div className={styles.OnboardCarousel_buttons}>
          {items?.map((item, index) => {
            return (
              <span
                key={index}
                onClick={() => {
                  updateIndex(index);
                }}
                className={`${
                  index === activeIndex
                    ? styles[`OnboardCarousel_buttons___active`]
                    : ''
                }`}
              ></span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OnboardCarousel;
