import Banner from "@components/banner";
import MenuBar from "@components/course-story/menuBar";
import SEO from "@components/seo";
import Layout from "@layouts/sectionLayout";
import type { GetServerSidePropsContext, NextPage } from "next";

interface IProps {
  params: string[];
}

const Newsletter: NextPage<IProps> = ({ params }) => {
  return (
    <>
      <SEO title="연수이야기" />
      <Banner title="연수이야기" navList={["연수이야기", "뉴스레터"]} />
      <MenuBar pageName="뉴스레터" />
      <Layout>
        <div className="pt-[4.214rem] text-4xl font-bold leading-[3.15rem] text-[#01111e]">
          뉴스레터
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      params: ctx.params?.page,
    },
  };
};

export default Newsletter;
