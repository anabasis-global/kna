"use client ";
import Image from "next/image";
import styles from "./page.module.css";
import Script from "next/script";

import { Form } from 'antd'


let fetcher = (ctx) => {}



export default function Home() {
  return (
    <div>
      <form>
        <Form />
      </form>
    </div>
  );
}
