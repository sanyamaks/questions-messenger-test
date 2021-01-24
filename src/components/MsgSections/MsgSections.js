import React, { useContext, useEffect } from "react";
import "./MsgSections.scss";
import MsgSectionsItem from "./MsgSectionsItem/MsgSectionsItem";
import { Context } from "../../store/Store";
import { getData, removeData, setData } from "../../utils/localStorage";

const MsgSections = () => {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    if (!getData()) {
      setData(state);
    } else {
      dispatch({ type: "SET_STORE", payload: getData() });
    }
  }, []);

  useEffect(() => {
    if (!!getData()) {
      removeData();
      setData(state);
    }
  }, [state]);

  return (
    <ul className="msg-sections">
      {state.sections.map((section) => {
        return (
          <MsgSectionsItem
            title={section.title}
            numberOfMessage={section.messages.length}
            key={section.id}
            onClick={() => {
              dispatch({ type: "SELECT_SECTION", payload: section.id });
            }}
            isActive={section.id === state.activeSection}
          />
        );
      })}
    </ul>
  );
};

export default MsgSections;
