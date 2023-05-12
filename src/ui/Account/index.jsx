import React from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { signOut } from "next-auth/react";

import Button from "@/components/common/Button";
import KeyValue from "../Checkout/KeyValue";

export default function Account({ user, data }) {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut();
    dispatch({ type: "SIGN_OUT" });
  };

  return (
    <>
      <div className="account-content">
        <div className="account-bg"></div>
        <div className="container">
          <div className="profile-container">
            <Image src={data.user.image} width={100} height={100} alt="user profile" />
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <h2 className="fw-bold mt-3">{data.user.name}</h2>
            <Button className="btn-danger" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="cart-container mt-4">
                <h4 className="fw-bold">Account Information !</h4>

                <div className="row">
                  <KeyValue keyField="Name" value={`${user?.firstName} ${user?.lastName}`} />
                  <KeyValue keyField="Contact" value={user?.phone} />
                  <KeyValue keyField="Mail" value={user?.email} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
