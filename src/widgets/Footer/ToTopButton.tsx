"use client";
import "./ToTopButton.scss"

export const ToTopButton = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            className="ToTopButton"
            onClick={scrollToTop}
            title="Наверх"
        ></button>
    )
}