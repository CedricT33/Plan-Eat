import { useState } from "react";
import Tab from "./Tab";

export default function Tabs({ children }) {

    const ongletActif = children.find(child => {
        return child.props?.actif === true;
    })?.props;

    const [activeTab, setActiveTab] = useState(ongletActif?.title);

    const onClickTabItem = tab => {
        setActiveTab(tab.props.title);
        if (tab.props.onClick) {
            tab.props.onClick(tab.props);
        }
    }

    const listeTabs = children.map(tab => {
        const { title } = tab.props;
        return <Tab 
            key={title}
            title={title}
            onClick={() => onClickTabItem(tab)}
            isActif={title === activeTab} />
    })

    const contentTab = children.find(tab => {
        return tab.props.title === activeTab;
    })?.props?.children

    return (
        <div className="tabs">
            <ul className="tab-list">
                {listeTabs}
            </ul>
            <div className="tab-content">
                {contentTab}
            </div>
        </div>
    );
}