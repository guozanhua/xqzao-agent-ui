import React, { Fragment } from 'react';
import { formatMessage } from 'umi/locale';
import Link from 'umi/link';
import { Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';
import SelectLang from '@/components/SelectLang';
import styles from './UserLayout.less';
import logo from '../assets/logo.svg';

const links = [
  {
    key: 'help',
    title: formatMessage({ id: 'layout.user.link.help' }),
    href: '',
  },
  {
    key: 'privacy',
    title: formatMessage({ id: 'layout.user.link.privacy' }),
    href: '',
  },
  {
    key: 'terms',
    title: formatMessage({ id: 'layout.user.link.terms' }),
    href: '',
  },
];

const copyright = (
  <Fragment>
    Copyright <Icon type="copyright" /> 2019 星球造{' '}
    <a
      key="github"
      title="git"
      target="_blank"
      rel="noopener noreferrer"
      href="https://gitee.com/smallc/SpringBlade"
    >
      <Icon type="github" />{' '}
    </a>
  </Fragment>
);

const UserLayout = ({ children }) => (
  // @TODO <DocumentTitle title={this.getPageTitle()}>
  <div className={styles.container}>
    <div className={styles.lang}>
      <SelectLang />
    </div>
    <div className={styles.content}>
      <div className={styles.top}>
        <div className={styles.header}>
          <Link to="/">
            <img alt="logo" className={styles.logo} src={logo} />
            <span className={styles.title}>星球造运营管理系统</span>
          </Link>
        </div>
        <div className={styles.desc}>星球造(手板加工/3D打印/机加工/模具等)全工艺|全材料|全尺寸定制化生产服务平台。</div>
      </div>
      {children}
    </div>
    <GlobalFooter links={links} copyright={copyright} />
  </div>
);

export default UserLayout;
