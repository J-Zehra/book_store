import { FetchedCart } from "@/types";
import * as React from "react";

interface EmailTemplateProps {
  name: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
}) => (
  <div>
    <h1>Thank you for your order, {name}!</h1>
  </div>
);
