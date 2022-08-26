import React from "react";
import Button from "../../Atoms/Button";
import Card from "../../Atoms/Card";
import { HeadingL, Paragraph, SubHeading } from "../../Atoms/Typography";
import styles from "./PricingCard.module.css";

export default function PricingCard({ planTitle, price, billedPer, features }) {
  return (
    <Card className={`p-l ${styles.pricingCard}`}>
      <SubHeading textColor="black-light" className="mb-xl">
        {planTitle}
      </SubHeading>
      <HeadingL textColor="black-light" className="mb-s">
        {price}
      </HeadingL>
      <Paragraph textColor="black-light" className="mb-xxl">
        {billedPer}
      </Paragraph>
      {features.map((feature) => {
        return (
          <Paragraph className="mb-m" key={feature}>
            {feature}
          </Paragraph>
        );
      })}
      <Button variant="secondary" className="mt-m">
        Try for Free
      </Button>
    </Card>
  );
}
