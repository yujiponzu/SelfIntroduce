import React from "react";
import { Work, Education, Interview, SNS } from "../WorksAndEducations";

interface WorksListProps {
  works: Work[];
}

export const WorksList: React.FC<WorksListProps> = ({ works }) => {
  return (
    <dl id="works-list" className="space-y-3">
      {works.map((elem) => (
        <div
          key={elem.title}
          className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200"
        >
          <dt className="flex flex-wrap items-center gap-2 text-lg font-semibold text-gray-900">
            {elem.url ? (
              <a
                href={elem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-blue-700"
              >
                {elem.title}
              </a>
            ) : (
              <span>{elem.title}</span>
            )}
            {elem.peerReview && (
              <span className="rounded-full bg-blue-600 px-2 py-0.5 text-xs font-semibold text-white">
                査読有
              </span>
            )}
          </dt>
          <dd className="mt-1 text-gray-700">{elem.description}</dd>
          {elem.book && (
            <dd className="mt-1 text-sm italic text-gray-500">{elem.book}</dd>
          )}
        </div>
      ))}
    </dl>
  );
};

interface EducationsListProps {
  educations: Education[];
}

export const EducationsList: React.FC<EducationsListProps> = ({
  educations,
}) => {
  return (
    <dl id="educations-list" className="space-y-2">
      {educations.map((elem) => (
        <div
          key={elem.time}
          className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-gray-200"
        >
          <dt className="text-lg font-semibold text-gray-900">{elem.time}</dt>
          <dd className="mt-1 text-base text-gray-700">
            {elem.school}
            {elem.status !== null && ` ${elem.status}`}
          </dd>
        </div>
      ))}
    </dl>
  );
};

interface InterviewListProps {
  interviews: Interview[];
}

export const InterviewList: React.FC<InterviewListProps> = ({ interviews }) => {
  return (
    <dl id="interviews-list" className="space-y-2">
      {interviews.map((elem) => (
        <div
          key={elem.title}
          className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-gray-200"
        >
          <dt className="text-lg font-semibold text-gray-900">
            <a
              href={`${elem.url}#${elem.specifiedId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-blue-700"
            >
              {elem.title}
            </a>
          </dt>
          <dd className="mt-1 text-sm text-gray-500">{elem.time}</dd>
          <dd className="mt-1 text-base text-gray-700">{elem.description}</dd>
        </div>
      ))}
    </dl>
  );
};

interface SNSListProps {
  sns: SNS[];
}

export const SNSList: React.FC<SNSListProps> = ({ sns }) => {
  return (
    <ul className="flex items-center gap-3">
      {sns.map((elem) => (
        <li key={elem.name} className="list-none">
          <a
            href={elem.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-white p-2 ring-1 ring-gray-300 transition hover:shadow-sm"
          >
            <img
              src={elem.address}
              alt={elem.name}
              className="h-10 w-10"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};
