import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import clsx from "clsx";

function Filter({ filterField, options }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentFilter = searchParams.get(filterField) || options.at(0).value;
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    function handleSelect(value) {
        searchParams.set(filterField, value);
        if (searchParams.get("page")) searchParams.set("page", 1);
        setSearchParams(searchParams);
        setIsOpen(false);
    }

    const currentLabel = options.find((o) => o.value === currentFilter)?.label;
    console.log(currentLabel)
    return (
        <div className="relative r-0 inline-block w-64" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-leftfont-medium shadow-sm hover:border-blue-500 focus:outline-none"
            >
                {currentLabel}
            </button>

            {isOpen && (
                <ul className="absolute z-10 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg">
                    {options.map((option) => (
                        <li key={option.value}>
                            <button
                                onClick={() => handleSelect(option.value)}
                                className={clsx(
                                    "w-full text-left px-4 py-2 hover:bg-blue-600 hover:text-white",
                                    option.value === currentFilter && "bg-blue-600 text-white"
                                )}
                            >
                                {option.label}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Filter;
