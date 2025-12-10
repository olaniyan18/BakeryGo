/** @format */

import React, { useState } from "react";
import Image from "./Image";
import styles from "./style.module.css";

export default function SignUp() {
  const [toggleVendor, setToggleVendor] = useState(true);
  const [toggleClient, setToggleClient] = useState(false);

  const roles = ["Vendor", "Client"];
  function handleToggleVendor() {
    setToggleVendor(true);
    setToggleClient(false);
    roles[0];
  }

  function handleToggleClient() {
    setToggleClient(true);
    setToggleVendor(false);
    roles[1];
  }

  return (
    <div className={styles.container}>
      <Image />
      <div className={styles.signup}>
        <h1>Create an account</h1>
        <p>Join Us Today!</p>

        <div className={styles.options}>
          <div>
            <input
              onChange={() => handleToggleVendor()}
              type='radio'
              name='radio'
              id=''
            />
            <span>As a Vendor</span>
          </div>
          <div>
            {" "}
            <input
              type='radio'
              onChange={() => handleToggleClient()}
              name='radio'
              id=''
            />
            <span>As a Client</span>
          </div>
        </div>
        <div className={styles.form}>
          {toggleVendor && (
            <div className={styles.name}>
              <span>Business Name</span>
              <input type='text' name='' placeholder='e.g. Ola cakes' id='' />
            </div>
          )}

          <div className={styles.first}>
            <div className={styles.name}>
              <span>First Name</span>
              <input type='text' name='' placeholder='first name' id='' />
            </div>
            <div className={styles.name}>
              <span>Last Name</span>
              <input type='text' name='' placeholder='last name' id='' />
            </div>
          </div>

          {toggleClient && (
            <div className={styles.name}>
              <span>Email Address</span>
              <input type='email' placeholder='email@gmail.com' name='' id='' />
            </div>
          )}
          <div className={styles.name}>
            <span>Phone Number</span>
            <input type='text' placeholder='08123456789' name='' id='' />
          </div>
          <div className={styles.name}>
            <span>Password</span>
            <input type='password' name='' id='' />
          </div>
          <div className={styles.name}>
            <span>Confirm Password</span>
            <input type='password' name='' id='' />
          </div>

          <button className={styles.button}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
