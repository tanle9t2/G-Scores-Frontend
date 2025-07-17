import { Outlet } from "react-router-dom";
import AppSidebar from "./AppSidebar";
import Header from "./Header";

function Applayout() {
    return (
        <div className="text-3xl min-h-screen">
            {/* Sidebar (fixed width) */}
            <Header />
            <div className="flex">
                <div className="w-80 bg-white dark:bg-gray-900 shadow-lg border-r">
                    <AppSidebar />
                </div>

                {/* Main content fills the rest */}
                <main className="flex-1 p-6  bg-gray-100 overflow-auto">
                    <Outlet />
                </main>
            </div>

        </div>
    );
}

export default Applayout;
