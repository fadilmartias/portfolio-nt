import React from "react";
import Footer from "./General/Footer";
import Header from "./General/Header";

const MainLayout = ({ children }) => (
    <>
        <Header />
        <main className="container mx-auto p-5">
            {children}
        </main>
        <Footer />
    </>
)

export default MainLayout;