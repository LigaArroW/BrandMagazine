"use client";
import { Logo } from "@/shared/ui/logo";
import { CatalogLink, MenuLink } from "../Header/consts";
import Link from "next/link";
import "./Footer.scss"
import { PolitishLink } from "./consts";

export const Footer = () => {

    return (
        <footer className="Footer container">
            <div className="row">
                <nav className="Footer__nav">
                    <Logo />
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
                {/* </nav>
                <nav className="Footer__nav"> */}
                    <ul className="Footer__nav-list Footer__menu">
                        {MenuLink.map((item, index) => (
                            <li key={index}>
                                <Link href={item.link}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="Footer__legal">
                    <span>
                        Зеркальные реплики мировых брендов
                    </span>
                    <a href="tel:+79032870813">
                        +7 903 287-08-13
                    </a>
                    <small>
                        <Link href={PolitishLink}>
                            Политика конфиденциальности
                        </Link>
                    </small>
                </div>
            </div>
        </footer>
    )
}