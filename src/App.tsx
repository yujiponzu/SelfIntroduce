import { TitleComponents, Heading } from "./components/StyledComponents";
import { EducationsList, InterviewList, WorksList } from "./components/ForList";
import { educations, works, interviews } from "./WorksAndEducations";
import { MaterialDrawer } from "./components/MenuDrawer";
import { TopMenu, menus } from "./components/TopMenu";
import { Introduction } from "./components/Introduction";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <MaterialDrawer />
      <main className="mx-auto my-12 flex max-w-5xl flex-col gap-8 px-6 lg:px-12">
        <TitleComponents title="植田雄士のホームページ" />
        <TopMenu menus={menus} />

        <section className="space-y-3">
          <Heading heading="自己紹介" />
          <Introduction />
        </section>

        <section className="space-y-3">
          <Heading heading="研究業績" />
          <WorksList works={works} />
        </section>

        <section className="space-y-3">
          <Heading heading="学歴" />
          <EducationsList educations={educations} />
        </section>

        <section className="space-y-3">
          <Heading heading="インタビュー" />
          <InterviewList interviews={interviews} />
        </section>
      </main>
    </div>
  );
};
