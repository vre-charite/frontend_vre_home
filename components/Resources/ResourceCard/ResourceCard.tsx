import styles from './ResourceCard.module.scss';

type Props = {
  imgSrc: string;
  href: string;
  children: string;
};
export function ResourceCard(props: Props) {
  const { imgSrc, href, children } = props;
  return (
    <div className={styles['resource-card']}>
      <img className={styles['img']} src={imgSrc} alt="" />

      <div className={styles['text']}>{children}</div>
      <div className={styles['visit']}>
        <a target="_blank" rel="noreferrer" href={href}>
          <img src="/vre/pages/img/visit.svg" />
          <span>Learn more</span>
        </a>
      </div>
    </div>
  );
}
