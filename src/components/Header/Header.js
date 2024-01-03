import React, { useEffect, useState } from "react";
import styles from "@/styles/components/Header/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import { TypeAnimation } from "react-type-animation";
const placeholderText = ["one", "two", "three"];
const Header = () => {
  const router = useRouter();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = () => {
      setIndex((prevIndex) => {
        if (prevIndex === placeholderText.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    };
    setInterval(timer, 2000);

    //cleanup function in order clear the interval timer
    //when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <section className={styles.header}>
        <div className="container">
          <div className={classNames("row", styles.row)}>
            <div className="col-1">
              <div className={styles.logo}>
                <Link href="/">
                  <img
                    src={
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/ZDF_logo%21_Logo_2021.svg/1200px-ZDF_logo%21_Logo_2021.svg.png"
                    }
                  />
                </Link>
              </div>
            </div>
            <div className="col-6">
              <div className={styles.navlinks}>
                <ul>
                  <li>
                    <Link
                      href="/"
                      className={router.pathname === "/" ? styles.active : ""}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/offer"
                      className={
                        router.pathname === "/offer" ? styles.active : ""
                      }
                    >
                      Offer
                    </Link>
                  </li>
                  {/* <li>
                    <div className={styles.dropdown}>
                      <Link href="" class={styles.dropbtn}>
                        Featured
                      </Link>
                      <div class={styles.dropdown_content}>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                      </div>
                    </div>
                  </li> */}
                  <li>
                    <Link href="">My E-pay</Link>
                  </li>
                  <li>
                    <Link href="">Featured</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-5">
              <div className={styles.searchsec}>
                <div className={styles.srch}>
                  <i class="bi bi-search"></i>
                  <input
                    type="search"
                    name=""
                    placeholder={
                     "search"
                    }
                    id=""
                  />
                </div>
                {/* <TypeAnimation
                        sequence={["One", 500, "Two", 500, "Three", 500]}
                        style={{ fontSize: "1em" }}
                        repeat={Infinity}
                      /> */}
                <div className={styles.loginBtn}>
                  <Link href={"/auth/login/login"}>
                    Sign In{" "}
                    <img
                      src="/images/SVG/log-in.svg"
                      className={styles.svgIcon}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
