import React from "react";

const Page = () => {
  return <div>Page</div>;
};

export async function getStaticPaths() {
  const paths = [];
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return {
    props: {},
  };
}
export default Page;
