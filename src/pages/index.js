import React from "react";
import Billing from "../components/Billing";
import Blog from "../components/Blog";
import Business from "../components/Business";
import CardDeal from "../components/CardDeal";
import Cta from "../components/CTA";
import Hero from "../components/Hero";
//import HeroV2 from "../components/HeroV2";
import Layout from "../components/Layout";
import Stats from "../components/stats";
import Testimonials from "../components/Testimonials";

const index = () => {
  return (
    <Layout>
      <Hero />
      {/* <HeroV2 /> */}
      <Stats />
      <Business />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Cta />
      <Blog />
    </Layout>
  );
};

export default index;
