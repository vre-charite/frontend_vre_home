// Copyright 2022 Indoc Research
// 
// Licensed under the EUPL, Version 1.2 or – as soon they
// will be approved by the European Commission - subsequent
// versions of the EUPL (the "Licence");
// You may not use this work except in compliance with the
// Licence.
// You may obtain a copy of the Licence at:
// 
// https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
// 
// Unless required by applicable law or agreed to in
// writing, software distributed under the Licence is
// distributed on an "AS IS" basis,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
// express or implied.
// See the Licence for the specific language governing
// permissions and limitations under the Licence.
// 

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
