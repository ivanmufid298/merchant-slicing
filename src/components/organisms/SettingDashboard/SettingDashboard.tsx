'use client';
import { Avatar } from '@/components/atoms/Avatar';
import { Card } from '@/components/atoms/Card';
import { Text } from '@/components/atoms/Text';
import imageAccount from '../../../../public/asset/icons/account.svg';
import imageFile from '../../../../public/images/profile_1.png';
import styles from './SettingDashboard.module.scss';

const SettingDashboard = () => {
  return (
    <div className="w-[360px] h-[671px] bg-yellow-700">
      <div className="px-[140px] py-[48px]">
        <Avatar image={imageFile.src} size={80} alt={''} />
      </div>
      <div className="flex w-[280px] flex-col pl-[40px] pr-[40px]">
        <Text
          className={styles.avatar__name}
          label="Tiffany Sakano"
          variant="regular16"
        />
      </div>
      <div className="w-[130px] h-[16px] px-[115px]">
        <Text
          className={styles.avatar__mail}
          label="tiffanys@gooddoctor.com"
          variant="regular16"
        />
      </div>
      <div className="w-[110px] h-[24px] px-[125px] py-[8px]">
        <Text
          className={styles.avatar__role}
          label="Super Store Admin"
          variant="regular16"
        />
      </div>
      <hr />
      <div className="pl-[16px] pr-[16px]">
        <Card className={styles.avatar__card} onClick={() => {}}>
          <div className={styles.avatar__role__title}>
            <Avatar image={imageAccount.src} className={styles.account__icon} size={40} alt={''} />
            <div className={styles.label__content}>
              <Text
                className={styles.label__role}
                label="Store Admin"
                variant="regular16"
              />
              <Text
                className={styles.label__role__text}
                label="Lorem ipsum dolor sit amet"
                variant="regular16"
              />
            </div>
          </div>
          <hr style={{ color: '#E5ECFF' }} />
          <div className={styles.avatar__role__title2}>
            <Avatar image={imageFile.src} size={40} alt={''} />
            <div className="flex-wrap">
              <Text
                className={styles.label__role}
                label="Store Admin"
                variant="regular16"
              />
              <Text
                className={styles.label__role__text}
                label="Lorem ipsum dolor sit amet"
                variant="regular16"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default SettingDashboard;
