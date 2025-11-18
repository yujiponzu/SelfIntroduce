import styled from 'styled-components';

interface TitleComponentsProps {
    title: string;
}

export const TitleComponents: React.FC<TitleComponentsProps> = (props) => {
    const { title } = props;
    return (
        <SContainer>
            <STitle>{title}</STitle>
        </SContainer>
    );
};

const SContainer = styled.div`
    border: solid 1px #000000;
    border-radius: 10px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const STitle = styled.h1`
    margin: 0;
    font-size: 24px;
    color: #000000;
`;

interface HeadingProps {
    heading: string;
}

export const Heading: React.FC<HeadingProps> = (props) => {
    const { heading } = props;
    return (
        <SHeading>{heading}</SHeading>
    );
};

const SHeading = styled.h2`
    font-size: 30px;
    color:rgb(100, 100, 100);
    border-bottom: double 3px #666;
    line-height: 1;
    margin-bottom: 15px;
    margin-top: 30px;
`;
