import type { NextPage } from "next";
import Image from "next/image";
import styled from "@emotion/styled";
import BannerImg from "assets/images/banner.svg";
import { useState, MouseEvent } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import QuestionCard from "components/QuestionCard";
import { jsQuestions, htmlQuestions } from "assets/data";

const CATEGORY_LIST = [
  { id: "all", label: "All" },
  { id: "html", label: "HTML" },
  { id: "css", label: "CSS" },
  { id: "js", label: "JavaScript" },
];

const Home: NextPage = () => {
  const [categoryAnchor, setCategoryAnchor] =
    useState<HTMLButtonElement | null>(null);
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState<number>(0);
  const isOpenCategoryMenu = Boolean(categoryAnchor);

  const onOpenCategory = (event: MouseEvent<HTMLButtonElement>) => {
    setCategoryAnchor(event.currentTarget);
  };

  const onCloseCategory = () => {
    setCategoryAnchor(null);
  };

  const onSelectCategory = (index: number) => {
    setSelectedCategoryIdx(index);
    onCloseCategory();
  };

  const renderQuestionList = () => {
    const database: any = {
      js: jsQuestions,
      html: htmlQuestions,
    };
    const category = CATEGORY_LIST[selectedCategoryIdx].id;
    let data = database[category] || [];
    if (category === "all") {
      data = Object.keys(database).reduce((totalQuestions, currentCategory) => {
        return totalQuestions.concat(database[currentCategory]);
      }, []);
    }

    return (
      <>
        {data.map((question: any, index: number) => (
          <QuestionCard data={question} key={index} />
        ))}
      </>
    );
  };

  return (
    <PageContainer>
      <Header>
        <Image src={BannerImg} alt="Banner image" />
      </Header>
      <Filter>
        <Container maxWidth="md">
          Category
          <Button
            id="category_button"
            onClick={onOpenCategory}
            aria-controls={isOpenCategoryMenu ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={isOpenCategoryMenu ? "true" : undefined}
          >
            {CATEGORY_LIST[selectedCategoryIdx].label}
          </Button>
          <Menu
            id="category_menu"
            anchorEl={categoryAnchor}
            open={isOpenCategoryMenu}
            onClose={onCloseCategory}
          >
            {CATEGORY_LIST.map(({ id, label }, index) => (
              <MenuItem key={id} onClick={() => onSelectCategory(index)}>
                {label}
              </MenuItem>
            ))}
          </Menu>
        </Container>
      </Filter>
      <Question>
        <Container maxWidth="md">{renderQuestionList()}</Container>
      </Question>
    </PageContainer>
  );
};

export default Home;

const PageContainer = styled.div``;
const Header = styled.div`
  background-image: radial-gradient(
    circle at 50.5% 52%,
    #f0afef,
    #b977c1 40px,
    #593173,
    #20164d 195px
  );
`;
const Filter = styled.div`
  margin-top: 25px;
`;
const Question = styled.main`
  margin: 16px 0;
`;
