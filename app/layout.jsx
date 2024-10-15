import { Inter } from "next/font/google";
import "/assets/styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify"; //
import "react-toastify/dist/ReactToastify.css";
import AuthWrapper from "./components/AuthWrapper";
import { AuthProvider } from "/context/authContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Booking App | Book a Room",
  description: "booking a meeting or a conference room for your team",
};

export default function RootLayout({ children }) {
  return (
    <AuthWrapper>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </AuthWrapper>
  );
}
