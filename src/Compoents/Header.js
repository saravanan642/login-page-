import React from "react";
import { ShieldLock } from "lucide-react"

const content = [
    {
        id: 1,
        icon: <ShieldLock size={60} />,
        tittle: "Secure Your Digital Workspace",
        description:
            "Join thousands of enterprise teams managing their core infrastructure with zero-trust security and modern simplicity",
    },
];

const Header = () => {
    return (
        <div className=" ">
            <section className="bg-primary min-h-screen">

                <div className="text-secondary text-4xl  pt-[16%] pl-[12%]" >

                    {content.map((item) => (
                        <div key={item.id}>

                            <div className=" pl-56 ">
                                <p className=" flex  p-2   border  border-solid border-white rounded-xl  hover:bg-blue-600  w-fit">{item.icon}</p>
                            </div>

                            <p className=" font-bold text-5xl">{item.tittle}</p>

                            <p className="max-w-3xl font-serif pt-6">
                                {item.description}
                            </p>

                        </div>
                    ))}

                </div>

            </section>

            <section>
              
            </section>
        </div>
    );
};

export default Header;