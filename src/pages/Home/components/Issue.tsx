import { FC } from 'react';

interface IssueProps {
  name: string;
  issueTypeIconUrl: string;
}

const Issue: FC<IssueProps> = ({ name, issueTypeIconUrl }) => {
  return (
    <div>
      <img src={issueTypeIconUrl} />
      <span>{name}</span>
    </div>
  );
};

export default Issue;
