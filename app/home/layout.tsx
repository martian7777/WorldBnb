import Navbar from "../components/navbar/Navbar";
import ClientOnly from "../components/ClientOnly";
import RegisterModal from "../components/modals/RegisterModal";
import ToasterProvider from "../providers/ToasterProvider";
import LoginModal from "../components/modals/LoginModal";
import getCurrentUser from "../actions/getCurrentUser";
import RentModal from "../components/modals/RentModal";

export default async function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const currentUser = await getCurrentUser();

    return (
        <>
            <ClientOnly>
                <ToasterProvider />
                <RentModal />
                <LoginModal />
                <RegisterModal />
                <Navbar currentUser={currentUser} />
            </ClientOnly>
            <div className="pb-20 pt-28">{children}</div>
        </>
    );
}
