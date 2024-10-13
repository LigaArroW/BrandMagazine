"use client";
import { Logo } from "@/shared/ui/logo";
import { CatalogLink, MenuLink } from "../Header/consts";
import Link from "next/link";
import { PolitishLink } from "./consts";
import { ToTopButton } from "./ToTopButton";
import "./Footer.scss"

export const Footer = () => {

    const halfIndex = Math.ceil(MenuLink.length / 2);
    const firstHalf = MenuLink.slice(0, halfIndex);
    const secondHalf = MenuLink.slice(halfIndex);

    return (
        <footer className="Footer container">
            <div className="row">
                <div className="Footer__logo">
                    <Logo />
                </div>
                <nav className="Footer__nav">
                    <ul className="Footer__nav-list">
                        <li>
                            <Link href={CatalogLink}>
                                Женское
                            </Link>
                            <ul>
                                <li>
                                    <Link href={CatalogLink}>
                                        Аксессуары
                                    </Link>
                                </li>
                                <li>
                                    <Link href={CatalogLink}>
                                        Сумки
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <nav className="Footer__nav">
                    <ul className="Footer__nav-list">
                        <li>
                            <Link href={CatalogLink}>
                                Мужское
                            </Link>
                            <ul>
                                <li>
                                    <Link href={CatalogLink}>
                                        Аксессуары
                                    </Link>
                                </li>
                                <li>
                                    <Link href={CatalogLink}>
                                        Сумки
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <nav className="Footer__nav">
                    <ul className="Footer__nav-list Footer__menu">
                        {firstHalf.map((item, index) => (
                            <li key={index}>
                                <Link href={item.link}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <nav className="Footer__nav">
                    <ul className="Footer__nav-list Footer__menu">
                        {secondHalf.map((item, index) => (
                            <li key={index + halfIndex}>
                                <Link href={item.link}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="Footer__legal">
                    <span className="Footer__legal-name">
                        Зеркальные реплики мировых брендов
                    </span>
                    <a
                        href="tel:+79032870813"
                        className="Footer__legal-tel"
                    >
                        +7 903 287-08-13
                    </a>
                    <small className="Footer__legal-policy">
                        <Link href={PolitishLink}>
                            Политика конфиденциальности
                        </Link>
                    </small>
                </div>
                <ToTopButton />
            </div>
        </footer>
    )
}