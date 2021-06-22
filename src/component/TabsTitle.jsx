import React from "react";
import PropTypes from "prop-types";
import "./TabsTitle.css";

const TabsTitle = ({ tabsContent, handleTitleClick, id }) => {
    return (
        <div className="TabsTitle">
            {tabsContent.map((item) => (
                <h2
                    key={item.id}
                    className={
                        item.id === id ? "TabsTitleItemActive" : "TabsTitleItem"
                    }
                    onClick={() => handleTitleClick(item.id, item.content)}
                >
                    {item.title}
                </h2>
            ))}
        </div>
    );
};

TabsTitle.propTypes = {
    tabsContent: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    ),
    handleTitleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
};

export default TabsTitle;
