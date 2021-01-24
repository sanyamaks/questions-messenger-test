import React, { useContext } from "react";
import "./MsgSections.scss";
import MsgSectionsItem from "./MsgSectionsItem/MsgSectionsItem";
import { Context } from "../../store/Store";

const MsgSections = () => {
  const [state, dispatch] = useContext(Context);
  return (
    <ul className="msg-sections">
      {state.sections.map((section) => {
        return (
          <MsgSectionsItem
            title={section.title}
            numberOfMessage={section.messages.length}
            key={section.id}
            onClick={() =>
              dispatch({ type: "SELECT_SECTION", payload: section.id })
            }
            isActive={section.id === state.activeSection}
          />
        );
      })}
    </ul>
  );
};

export default MsgSections;
