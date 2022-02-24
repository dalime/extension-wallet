import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import UserTag from '../Common/UserTag';
import styles from '../../styles/Navbar.module.css';

const stylez = {
  button: {
    background: 'transparent',
    border: 'none',
  },
}

export default function Navbar(): JSX.Element {
  const router = useRouter();

  const renderButton = (img: JSX.Element, clickFunc: Function): JSX.Element => (
    <button
      onClick={(e) => {
        e.preventDefault();
        clickFunc();
      }}
      style={stylez.button}
    >
      {img}
    </button>
  );

  const goToNotifications = (): void => {
    // router.push('/notifications');
  }

  const goToSettings = (): void => {
    // router.push('/settings');
  }

  return (
    <nav className={styles.navbar}>
      {router.pathname !== '/' && renderButton(
        <Image
          src="/images/symbols/arrow_left.svg"
          alt="Home symbol"
          width={20}
          height={22}
        />,
        () => router.back(),
      )}
      {renderButton(
        <Image
          src="/images/symbols/home_symbol_purple.svg"
          alt="Home symbol"
          width={27.42}
          height={30}
        />,
        () => router.push('/'),
      )}
      <div>
        <UserTag
          imgSrc="/images/icons/user_icon_full.svg"
          name="Johndoe.near"
          dropdown={() => { }}
        />
      </div>
      <div className={styles.settings}>
        {renderButton(
          <Image
            src="/images/icons/notification_icon.svg"
            alt="Notification icon"
            width={26}
            height={26}
          />,
          () => goToNotifications(),
        )}
        {renderButton(
          <Image
            src="/images/icons/settings_icon.svg"
            alt="Settings icon"
            width={26}
            height={26}
          />,
          () => goToSettings(),
        )}
      </div>
    </nav>
  )
}
