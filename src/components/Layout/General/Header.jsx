import React from "react";
import Link from "next/link";
import { menu } from "src/data/menu";

export default function Header() {
    return (
        <header className="border-b border-slate-500 py-5 mb-5">
            <div className="container mx-auto flex justify-between px-5">
                <div className="logo">
                    <Link href="/" legacyBehavior>
                    <a>Fadil.</a>
                    </Link>
                </div>
                <ul className="flex gap-5">
                    {menu.map((value, index) => (
                        <li key={index}>
                            <Link href={value.href} legacyBehavior>
                                <a>{value.label}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div>
                    <Link href="/contact" legacyBehavior>
                        <a className="border border-slate-400 p-1 px-5">Contact</a>
                    </Link>
                </div>
            </div>
        </header>
    );
}
