'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { TypingText, ExploreCard, TitleText } from '../components';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { exploreWorlds } from '../constants';

const Explore = () => (
  <section id="explore" className={`${styles.paddings}`}>
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <TypingText title="| The World" textStyles="text-center" />
      <TitleText variants="." />
    </motion.div>
  </section>
);

export default Explore;
