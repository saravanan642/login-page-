import React from "react";
import { ShieldLock } from "lucide-react";
import Header from "./Header";

const content = [
    {
        id: 1,
        icon: <ShieldLock size={60} />,
        tittle: "Secure Your Digital Workspace",
        description:
            "Join thousands of enterprise teams managing their core infrastructure with zero-trust security and modern simplicity",
    },
];

const Herosection = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">

            
            <section className="bg-primary w-1/2 min-h-screen flex items-center justify-center">

                <div className="text-white text-4xl">

                    {content.map((item) => (
                        <div key={item.id}>

                            <div className="pl-56">
                                <p className="flex p-2 border border-solid border-white rounded-xl hover:bg-blue-600 w-fit">
                                    {item.icon}
                                </p>
                            </div>

                            <p className="font-bold text-5xl">
                                {item.tittle}
                            </p>

                            <p className="max-w-3xl font-serif pt-6">
                                {item.description}
                            </p>

                        </div>
                    ))}

                </div>

            </section>

            
            <div className="w-1/2 flex items-center justify-center">
                <Header />
            </div>

        </div>
    );
};

export default Herosection;