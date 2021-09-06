import { Card } from "./components/card/Card";
import { IssueCard } from './components/issue-card/IssueCard';
import MemberCard from "./components/member-card/member-card";

export default function App(): JSX.Element {
  return (
    <div className="App"> 
      <Card 
        title="Ihar Usmanau" 
        subtitle="React Dev"  
      /> 
      <IssueCard 
        title="Issue 543" 
        subtitle="low priority" 
      />
      <MemberCard 
        title="Ihar Usmanau" 
        subtitle="React Dev"
        photoURL="test"
      />
      <MemberCard 
        title="Ihar Usmanau" 
        subtitle="React Dev"
        photoURL="test"
      />
      <MemberCard 
        title="David Blane" 
        subtitle="React Dev"
        isPhoto
        isCancel
        photoURL="test"
      />
      <MemberCard 
        isCurrentPlayer
        title="Ihar Usmanau" 
        subtitle="React Dev"
        photoURL="test"
      />
      <Card 
        isCurrentPlayer
        isSmall
        title="Chat" 
        subtitle="card"  
      />
      <MemberCard 
        title="Ihar Usmanau" 
        subtitle="React Dev"
        isSmall
        photoURL="test"
      />
      <MemberCard 
        title="David Blane" 
        subtitle="React Dev"
        isPhoto
        isCancel
        isSmall
        photoURL="test"
      />
    </div>
  )
} 