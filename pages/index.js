import Head from "next/head";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Header from "@/components/Header/Header";
import CopyLinkButton from "@/components/CopyLinkButton/CopyLinkButton";

import cl from "@/styles/Home.module.scss";

export default function Home() {
  const { t } = useTranslation('index');
  return (
    <>
      <Head>
        <title>Givgive</title>
        <meta name="description" content="Givgive" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={cl.main}>
        <div className={cl.registration}>
          <div className={cl.registration__wrap}>

            <h1 className={cl.registration__title}>{t('text0')}</h1>
            <h3 className={cl.registration__subtitle}>{t('text1')}</h3>

            <div className={cl.registration__block}>
              <div className={cl.registration__item}>
                <h4 className={cl.registration__caption}>1. {t('text2')}</h4>
                {/* <CopyLinkButton url='https://api.givgive.com/hash/46KIxf' /> */}
                <a target="_blank" href="https://api.givgive.com/hash/46KIxf">https://api.givgive.com/hash/46KIxf</a>
              </div>

              <div className={cl.registration__item}>
                <h4 className={cl.registration__caption}>2. {t('text3')}</h4>
              </div>

              <div className={cl.registration__item}>
                <h4 className={cl.registration__caption}>3. {t('text4')}</h4>
                <img src="/images/register_1.jpg" />
              </div>

              <div className={cl.registration__item}>
                <h4 className={cl.registration__caption}>4. {t('text5')} </h4>
                <img src="/images/register_2.jpg" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['index'])),
  }
});
