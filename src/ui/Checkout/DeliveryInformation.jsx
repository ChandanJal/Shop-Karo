import React from "react";

import KeyValue from "./KeyValue";

export default function DeliveryInformation({ user }) {
  if (!user) return false;

  return (
    <div className="cart-container">
      <h5 className="fw-bold border-bottom pb-2">Delivery Information</h5>

      <div className="row">
        <KeyValue keyField="Name" value={`${user.firstName} ${user.lastName}`} />

        <KeyValue
          keyField="Address"
          value={`${user.address.address}, ${user.address.city} - ${user.address.postalCode}`}
        />

        <KeyValue keyField="City" value={user.address?.city} />

        <KeyValue keyField="Postal Code" value={user.address.postalCode} />

        <KeyValue keyField="Mobile" value={user.phone} />

        <KeyValue keyField="Email" value={user.email} />
      </div>
    </div>
  );
}
