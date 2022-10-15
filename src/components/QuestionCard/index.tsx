import Button from "@mui/material/Button";
import AnswerSection from "components/AnswerSection";
import { useState } from "react";
import {
  Card,
  CardWrapper,
  Header,
  QuestionBadge,
  QuestionTag,
} from "./styled.component";
import MarkDown from "components/MarkDown";

const QuestionCard = ({ data }: any) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const toggleShowAnswer = () => setShowAnswer((toggle) => !toggle);

  return (
    <CardWrapper>
      <QuestionBadge>easy</QuestionBadge>
      <Card>
        <QuestionTag className={`is-${data.category}`} />
        <Header>
          <MarkDown>{data.question}</MarkDown>
        </Header>
        <Button
          id="toggle_answer_btn"
          variant="outlined"
          onClick={toggleShowAnswer}
        >
          {showAnswer ? "Hide answer" : "Show answer"}
        </Button>
        {showAnswer && <AnswerSection answer={data.answer} />}
      </Card>
    </CardWrapper>
  );
};

export default QuestionCard;
