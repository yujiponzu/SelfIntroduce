import React from "react";
import styled from "styled-components";
import { Work, Education, Interview, SNS } from "../WorksAndEducations";

interface WorksListProps {
    works: Work[];
}

export const WorksList: React.FC<WorksListProps> = ({ works }) => {
    return (
        <dl id="works-list">
            {
                works.map(elem => (
                    <React.Fragment key={elem.title}>
                        <SDt>
                            {elem.url ? (
                                <>
                                    <a href={elem.url} target="_blank" rel="noopener noreferrer">
                                        <SPaperTitle>{elem.title}</SPaperTitle>
                                    </a>
                                    {elem.peerReview && <SPeerReviewBadge>査読有</SPeerReviewBadge>}
                                </>
                            ) : (
                                <>
                                    <SPaperTitle>{elem.title}</SPaperTitle>
                                    {elem.peerReview && <SPeerReviewBadge>査読有</SPeerReviewBadge>}
                                </>
                            )}
                        </SDt>
                        <SPaperDescription>{elem.description}</SPaperDescription>
                        <SBook>{elem.book}</SBook>
                    </React.Fragment>
                ))
            }
        </dl>
    );
}

const SPeerReviewBadge = styled.span`
    margin-left: 0.5rem;
    padding: 1px 3px;
    fontSize: 0.75rem;
    color: white;
    background-color: blue;
    border-radius: 8px;
`

const SPaperTitle = styled.span`
    font-style: bold;
    font-size: 18px;
    display: inline;
`

const SPaperDescription = styled.dd`
    margin-left: 2rem;
`

const SBook = styled.dd`
    margin-left: 2rem;
    font-style: italic;
    font-size: 0.8rem;
`
const SDt = styled.dt`
    margin-top: 1rem;
`

interface EducationsListProps {
    educations: Education[];
}

export const EducationsList: React.FC<EducationsListProps> = ({ educations }) => {
    return (
        <dl id="educations-list">
            {
                educations.map(elem => (
                    <React.Fragment key={elem.time}>
                        <SCareerDTitile>{elem.time}</SCareerDTitile>
                        <SCareerDdescription>
                            {elem.school}
                            {
                                elem.status !== null && ` ${elem.status}`}
                        </SCareerDdescription>
                    </React.Fragment>
                ))
            }
        </dl>
    );
}

const SCareerDTitile = styled.dt`
    font-size: 18px;
    color: #000000;
`

const SCareerDdescription = styled.dd`
    margin-left: 2rem;
    font-size: 16px;
`

interface InterviewListProps {
    interviews: Interview[];
}

export const InterviewList: React.FC<InterviewListProps> = ({ interviews }) => {
    return (
        <dl id="interviews-list">
            {
                interviews.map(elem => (
                    <React.Fragment key={elem.title}>
                        <SInterviewTitle>
                            <a href={`${elem.url}#${elem.specifiedId}`} target="_blank" rel="noopener noreferrer">
                                {elem.title}
                            </a>
                        </SInterviewTitle>
                        <SInterviewDate>{elem.time}</SInterviewDate>
                        <SInterviewDescription>{elem.description}</SInterviewDescription>
                    </React.Fragment>
                ))
            }
        </dl>
    );
}

const SInterviewTitle = styled.dt`
    font-size: 18px;
    color: #000000;
`

const SInterviewDate = styled.dd`
    margin-left: 2rem;
    font-size: 14px;
`

const SInterviewDescription = styled.dd`
    margin-left: 2rem;
    font-size: 16px;
`

interface SNSListProps {
    sns: SNS[];
}

export const SNSList: React.FC<SNSListProps> = ({ sns }) => {
    return (
        <ul>
            {
                sns.map((elem) => (
                    <React.Fragment key={elem.name}>
                        <SSNSList>
                            <a href={elem.url} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={elem.address}
                                    alt={elem.name}
                                    style={{ width: "50px", height: "50px", marginRight: "10px" }}
                                />
                            </a>
                        </SSNSList>
                    </React.Fragment>
                ))
            }
        </ul>
    );
}

const SSNSList = styled.li`
    list-style-type: none;
    display: inline-flex;
    align-items: center;
`
