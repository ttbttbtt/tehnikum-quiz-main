import React from "react";

export const Inditext = ({ tag, clname, text }) => {
    const renderInditext = () => {
        switch (tag) {
            case 'span':
                return <span className={clname}>{text}</span>
            default:
                return <span className={clname}>{text}</span>

        }
    }
    return (
        renderInditext()
    )
}