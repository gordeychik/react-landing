import React, { useState } from 'react';
import { Container } from "../../ui/Container/Container";
import { Widget } from "./Widget";
import styles from "./Tariff.module.scss";

export const Tariff = () => {
  const [activeTab, setActiveTab] = useState('month'); // По умолчанию активен таб "Month"

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.tariff} id='pricing'>
      <Container>
        <p>We have selected the best payment solutions for you.</p>
        <h2>Choose your tariff plan</h2>
        <div className={styles.tariff__tabs}>
          <button 
            className={`${styles.tariff__month} ${activeTab === 'month' ? styles.active : ''}`}
            onClick={() => handleTabChange('month')}
          >
            Month
          </button>
          <button 
            className={`${styles.tariff__year} ${activeTab === 'year' ? styles.active : ''}`}
            onClick={() => handleTabChange('year')}
          >
            Years
          </button>
        </div>
        <div className={styles.tariff__widgets}>
          <div className={`${styles.tariff__widgetsMonth} ${activeTab === 'month' ? styles.active : ''}`}>
            <Widget backgroundColor='#F95A2C' plan='Free Plan' price='$0 month' mail='5 Email' share='Free Share' client='200 Clients' support='Chat support' />
            <Widget backgroundColor='#1BDBC4' plan='Basic' price='$5 month' mail='200 Email' share='Free Share' client='500 Clients' support='Chat + Email support'/>
            <Widget backgroundColor='#962EFF' plan='Advanced' price='$9 month' mail='2000 Email' share='Free Share' client='1000 Clients' support='Chat + Email support' />
            <Widget backgroundColor='#FFBD12' plan='Most Advanced' price='$12 month' mail='Unlim Email' share='Free Share' client='10 000 Clients' support='Personal Manager' />
          </div>
          <div className={`${styles.tariff__widgetsYears} ${activeTab === 'year' ? styles.active : ''}`}>
            <Widget backgroundColor='#F95A2C' plan='Free Plan' price='$0 year' mail='5 Email' share='Free Share' client='200 Clients' support='Chat support' />
            <Widget backgroundColor='#1BDBC4' plan='Basic' price='$50 year' mail='200 Email' share='Free Share' client='500 Clients' support='Chat + Email support'/>
            <Widget backgroundColor='#962EFF' plan='Advanced' price='$90 year' mail='2000 Email' share='Free Share' client='1000 Clients' support='Chat + Email support' />
            <Widget backgroundColor='#FFBD12' plan='Most Advanced' price='$120 year' mail='Unlim Email' share='Free Share' client='10 000 Clients' support='Personal Manager' />
          </div>
        </div>
      </Container>
    </div>
  );
};