import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
const BusinessCard = () => {
  return (
    <Card className="max-w-[500px]">
      <CardHeader>
        <div className="flex flex-col">
          <p className="text-lg font-bold">Techies </p>
          <p className="text-small text-default-500">
            Anything Technology Repair Shop
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <address>123 Business St, Anytown, Kenya</address>
      </CardBody>
      <Divider />
      <CardFooter className="flex flex-col gap-2">
        <p>Open daily from 9:00 AM to 5:00 PM</p>
        <Link className="hover:underline" href="tel:12345678">
          Call us at 123-456-7890
        </Link>
      </CardFooter>
    </Card>
  );
};
export default BusinessCard;
