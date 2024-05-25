import React from "react";
import Type from "./Type";

const TypeList = ({ typeList }) => {
    const typeComponent = typeList.map((type, i) => {
        return (
            <div className="mw5 mw7-ns center pa1 ph5">
                <Type
                    key={i}
                    type={type}
                />
            </div>
        )
    })

    return (
        <div>
            {typeComponent}
        </div>
    )
}

export default TypeList;