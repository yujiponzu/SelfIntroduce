import { TitleComponents, Heading } from "./components/StyledComponents";
import { EducationsList, InterviewList, WorksList } from "./components/ForList";
import { educations, works, interviews } from "./WorksAndEducations";
import { GlobalStyle } from "./components/GlobalStyle";
import { MaterialDrawer } from "./components/MenuDrawer";
import { TopMenu, menus } from "./components/TopMenu";
import { Introduction } from "./components/Introduction";

export const App: React.FC = () => {
    return (
        <>
            <MaterialDrawer />
            <GlobalStyle />
            <TitleComponents title="植田雄士のホームページ" />
            <TopMenu menus={menus} />

            <Heading heading="自己紹介" />
            <Introduction />

            <Heading heading="研究業績" />
            <WorksList works={works} />

            <Heading heading="学歴" />
            <EducationsList educations={educations} />

            <Heading heading="インタビュー" />
            <InterviewList interviews={interviews} />
        </>
    )
}
// test
