import { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    name: 'Tushig',
    title: 'Full-Stack Web Developer',
    heroIntro: 'Building scalable, modern web applications with passion and precision.',
    about: 'About Me',
    aboutText: `Hi, I'm Tushig — a passionate full-stack developer who loves building things that make a difference. I enjoy collaborating with creative people, learning new technologies, and turning ideas into real, impactful products. My journey in tech is driven by curiosity, teamwork, and the joy of solving real-world problems.`,
    projects: 'Projects',
    projectsTitle: 'Show What I Can Do',
    projectOne: 'Enterprise Dashboard – A real-time analytics platform for business insights.',
    projectTwo: 'E-Commerce Platform – Scalable online store with payment integration.',
    skills: 'Skills',
    skillsFrontend: 'Frontend',
    skillsBackend: 'Backend',
    skillsOther: 'Other',
    contact: 'Contact',
    contactText: 'Let’s build something great together! Connect with me:',
    email: 'Email',
    emailAddress: 'tsetushig@gmail.com',
    github: 'GitHub',
    githubLink: 'https://github.com/tushig666',
    linkedin: 'LinkedIn',
    copyright: 'Tushig'
  },
  mn: {
    name: 'Түшиг',
    title: 'Бүтэн стек вэб хөгжүүлэгч',
    heroIntro: 'Орчин үеийн, өргөтгөх боломжтой вэб аппликейшн бүтээдэг.',
    about: 'Миний тухай',
    aboutText: `Сайн байна уу, Намайг Түшиг гэдэг.
. Би бүтээлч, нээлттэй сэтгэлгээтэй, бодит амьдралд үнэ цэнтэй зүйл бүтээх дуртай бүтэн стек хөгжүүлэгч. Шинэ технологи сурах, хамт олонтойгоо санаа бодлоо хуваалцах, бодит асуудлыг шийдэх нь миний урам зориг. Хөгжүүлэлт бол миний хувьд зөвхөн ажил биш, амьдралын минь нэг хэсэг юм.`,
    projects: 'Төслүүд',
    projectsTitle: 'Миний хийж чадах зүйлс',
    projectOne: 'Enterprise Dashboard – Бизнесийн бодит цагийн шинжилгээний платформ.',
    projectTwo: 'E-Commerce Platform – Төлбөрийн системтэй онлайн дэлгүүр.',
    skills: 'Ур чадвар',
    skillsFrontend: 'Фронтенд',
    skillsBackend: 'Бэкенд',
    skillsOther: 'Бусад',
    contact: 'Холбоо барих',
    contactText: 'Хамтдаа гайхалтай зүйл бүтээцгээе! Надтай холбогдоорой:',
    email: 'Имэйл',
    emailAddress: 'tsetushig@gmail.com',
    github: 'Гитхаб',
    githubLink: 'https://github.com/tushig666',
    copyright: 'Түшиг'
  },
  ja: {
    name: 'トゥシグ',
    title: 'フルスタックウェブ開発者',
    heroIntro: 'スケーラブルでモダンなWebアプリを情熱と精度で構築します。',
    about: '私について',
    aboutText: `こんにちは、トゥシグです。私は人と協力し、アイデアを形にし、社会に価値をもたらすことが大好きなフルスタック開発者です。新しい技術を学び、仲間と共に成長し、現実の課題を解決することに情熱を持っています。開発は私にとって仕事以上のものであり、人生の一部です。`,
    projects: 'プロジェクト',
    projectsTitle: 'できること',
    projectOne: 'エンタープライズダッシュボード – ビジネス分析のためのリアルタイムプラットフォーム。',
    projectTwo: 'Eコマースプラットフォーム – 決済統合付きのスケーラブルなオンラインストア。',
    skills: 'スキル',
    skillsFrontend: 'フロントエンド',
    skillsBackend: 'バックエンド',
    skillsOther: 'その他',
    contact: '連絡先',
    contactText: '一緒に素晴らしいものを作りましょう！ご連絡ください:',
    email: 'メール',
    emailAddress: 'tsetushig@gmail.com',
    github: 'ギットハブ',
    githubLink: 'https://github.com/tushig666',
    linkedin: 'リンクトイン',
    copyright: 'トゥシグ'
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const t = translations[lang];
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
