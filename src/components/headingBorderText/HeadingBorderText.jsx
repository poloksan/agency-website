import React from 'react';

export default function HeadingBorderText({ text }) {
    return (
        <h5 className="border-2 border-custom-primary/50 inline-block px-6 py-2 rounded-full text-custom-light-gray text-sm md:text-base lg:text-xl uppercase select-none shadow-amber-400">
            {text}
        </h5>
    );
}
