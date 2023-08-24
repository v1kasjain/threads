"use client";

import { useForm } from "react-hook-form";
import { Form } from "../ui/form";

interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
}
const AccountProfile = ({ user, btnTitle }: Props) => {
  const form = useForm();
  return (
    <Form>
      <div className="flex flex-col space-y-4">
        {/* Profile Image */}
      </div>
    </Form>
  );
};

export default AccountProfile;
