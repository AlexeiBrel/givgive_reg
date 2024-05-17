import React from 'react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next'

import cl from './Header.module.scss';
import Select from 'react-dropdown-select';
// import { useOpenModalQr } from '../../context/index.jsx';

const options = [
    { value: 'en', label: 'EN' },
    { value: 'pl', label: 'PL' },
    { value: 'ua', label: 'UA' },
    { value: 'by', label: 'BY' },
    { value: 'ru', label: 'RU' },
];

const Header = () => {
    const router = useRouter();
    const [selectedLanguage, setSelectedLanguage] = useState(router.locale);
    const { t } = useTranslation('header')
    const isHomePage = router.pathname === '/';
    // const { isModalOpenQr, setIsModalOpenQR } = useOpenModalQr()

    useEffect(() => {
        setSelectedLanguage(router.locale);
    }, [router.locale]);

    const handleChange = (locale) => {
        locale = locale[0].value
        router.push(router.pathname, router.asPath, { locale })
        setSelectedLanguage(locale);
    }

    return (
        <header className={cl.header}>
            <div className={cl.header__wrap}>
                <div className={cl.header__logo}>
                    <Link href="/">
                        <img src="/images/icons/logo.svg" alt="logo" />
                    </Link>
                </div>
                <div className={cl.header__btns}>
                    <Select
                        className={cl.header__select}
                        options={options}
                        valueField="value"
                        values={[{ value: selectedLanguage, label: selectedLanguage.toUpperCase() }]}
                        labelField="label"
                        onChange={(values) => handleChange(values)}
                        searchable={false}
                        clearable={false}
                        style={{ border: 'none' }}
                    />
                </div>
            </div>
        </header>
    );

};

export default Header;