import { Portal } from "@headlessui/react";

interface IPropsModal {
    children: React.ReactNode
}

const FilterModal: React.FC<IPropsModal> = ({ children }) => {
    return (
        <Portal>
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/50 w-full h-full xl:hidden">

                {children}
            </div>
        </Portal>
    );
};

export default FilterModal;