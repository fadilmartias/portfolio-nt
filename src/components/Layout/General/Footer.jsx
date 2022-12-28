import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <footer className="border-t border-slate-500 mt-5 py-5">
            <div className="container mx-auto flex px-5">
                <ul className="flex gap-5">
                    <li>
                        <Link href="/" legacyBehavior>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" legacyBehavior>
                            <a>About Me</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" legacyBehavior>
                            <a>Work</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" legacyBehavior>
                            <a>Hobby</a>
                        </Link>
                    </li>
                </ul>

                <div className="ml-auto">Copyrights &copy; 2022</div>
            </div>
        </footer>
    );
}
