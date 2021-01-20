import React from "react";
import "./MsgSections.scss";
import MsgSectionsItem from "./MsgSectionsItem/MsgSectionsItem";

const MsgSections = () => {
    return (
        <ul className="msg-sections">
            <MsgSectionsItem />
            <MsgSectionsItem />
            <MsgSectionsItem />
            <MsgSectionsItem />
        </ul>
    );
};

export default MsgSections;
