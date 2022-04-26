import React from 'react';
import styled from 'styled-components';

const CSSBlock = styled.div`
div.news_info{
    font-size: 12pt;
    border-bottom: 1px solid #bbbbbb;
}

div.dsc_wrap{
    font-size: 11pt;
    margin-top: 4px;
}

div.news_area{
    margin: 10px 0px;
}
`;

class NewsItem extends React.Component {
    render() {
        const { title, description, link } = this.props.data;
        return (
            <React.Fragment>
                <CSSBlock>
                    <div className="news_area">
                        <div className="news_info">
                            <a href={link} target="_blank" rel="noopener noreferrer" title={title} dangerouslySetInnerHTML={{__html:title}}></a></div>
                        <div className="news_dsc">
                            <div className="dsc_wrap" dangerouslySetInnerHTML={{__html:description}}></div>
                        </div>
                    </div>
                </CSSBlock>
            </React.Fragment>
        );
    }
}

export default NewsItem;