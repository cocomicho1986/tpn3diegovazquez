// src/components/Footer.jsx
import React from 'react';
import useFooterStore from '../store/useFooterStore';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  const { footerText } = useFooterStore();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p className={styles.footerText}>{footerText}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}