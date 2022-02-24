import React, { useState } from 'react';
import FeedSection from './FeedSection';
import styles from '../../styles/Feed.module.css';
import Collectibles from '../Collectibles/Collectibles';
import Transactions from '../Transactions/Transactions';

export default function Feed(): JSX.Element {
  const [viewCollectibles, setViewCollectibles] = useState<boolean>(true);

  const renderSections = (): JSX.Element[] => {
    const sections = [
      {
        name: 'Contacts',
        textColor: '#414047',
        child: <>

        </>,
        toSection: () => { },
        backgroundColor: '#F5F5F5',
      },
      {},
      {
        name: 'web3 Apps',
        textColor: '#FFFFFF',
        child: <>

        </>,
        toSection: () => { },
        backgroundColor: '#885FFF',
        backgroundImage: '/images/backgrounds/web3_apps',
      },
    ];

    return sections.map((section, index) => {
      if (Object.keys(section).length === 0) {
        return <div key={index} style={{ width: 10 }} />;
      }

      const { name, textColor, child, toSection, backgroundColor, backgroundImage, } = section;

      return (
        <FeedSection
          key={index}
          name={name || ''}
          textColor={textColor || ''}
          child={child || <></>}
          toSection={toSection || (() => { })}
          backgroundColor={backgroundColor || undefined}
          backgroundImg={backgroundImage || undefined}
        />
      );
    });
  }

  return (
    <div className={styles.feed}>
      <div className={styles.row}>
        {renderSections()}
      </div>
      <div style={{ height: 10 }} />
      <FeedSection
        name="Start Creating your NFT Today"
        child={<></>}
        backgroundColor="#F7E9FF"
        backgroundImg='/images/backgrounds/create_nft_seections.png'
        textColor='#414047'
        toSection={() => { }}
        style={{ height: 168, }}
      />
      <div className={styles.row}>
        <button
          className={styles.listLabel}
          style={viewCollectibles ? { borderBottom: '3px solid #33373B', } : {}}
          onClick={(e) => {
            e.preventDefault();
            setViewCollectibles(!viewCollectibles);
          }}
        >
          Collectibles
        </button>
        <button
          className={styles.listLabel}
          style={viewCollectibles ? {} : { borderBottom: '3px solid #33373B', }}
          onClick={(e) => {
            e.preventDefault();
            setViewCollectibles(!viewCollectibles);
          }}
        >
          Transactions
        </button>
      </div>
      <hr style={{ border: '1px solid #DFDFE0', marginTop: 0, }} />
      {viewCollectibles ? (
        <Collectibles />
      ) : (
        <Transactions />
      )}
    </div>
  )
}
