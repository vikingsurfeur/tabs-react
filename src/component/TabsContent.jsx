import React from "react";
import PropTypes from "prop-types";
import "./TabsContent.css";

const TabsContent = ({ content }) => {
    return <p className="Content">{content}</p>;
};

TabsContent.propTypes = {
    content: PropTypes.string.isRequired,
};

export default TabsContent;
