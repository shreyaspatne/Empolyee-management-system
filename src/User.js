import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./User.css";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import sdata from "./sdata";

import Employ from "./Employ";
function User() {
  const [alpha, setalpha] = useState("A"); // for changing the alphabet writern on heading
  const [previousElem, setfirstval] = useState(0); //for changing the cut shape design below alphabet
  const changealpha = (val) => {
    // ***************************************// for changing the alphabet writern on heading
    let linkval = val.target.name;
    console.log(val);
    setalpha(linkval);
    // ***************************************// for changing the alphabet writern on heading

    //for changing the class and creating cut symol below alphabet***********************
    let clickedElem;

    const elem = document.querySelectorAll(".alphabet__child");
    elem[previousElem].className = "alphabet__child";

    clickedElem = val.target.id;
    setfirstval(clickedElem);

    val.target.className = "alphabet__child down__header__line__itemactive";
    //for changing the class and creating cut symol below alphabet***********************
  };

  return (
    <>
      <div className="Header__user">
        <div className="down__header">
          <div className="down__header__line1">
            <div className="line1__leftside">
              <PersonOutlineIcon className="line1__leftside__icon" />
              <div className="line1__leftside__text">Users List</div>
            </div>
            <div className="line1__rightside">
              <button>Manage Users</button>
              <button>
                More &nbsp; <i class="arrow down"></i>
              </button>
            </div>
          </div>
          <div className="down__header__line2">
            <Link
              onClick={changealpha}
              name="A"
              className="alphabet__child down__header__line__itemactive"
              id="0"
            >
              A
            </Link>
            <Link
              onClick={changealpha}
              name="B"
              className="alphabet__child"
              id="1"
            >
              B
            </Link>
            <Link
              onClick={changealpha}
              name="C"
              className="alphabet__child"
              id="2"
            >
              C
            </Link>
            <Link
              onClick={changealpha}
              name="D"
              className="alphabet__child"
              id="3"
            >
              D
            </Link>
            <Link
              onClick={changealpha}
              name="E"
              className="alphabet__child"
              id="4"
            >
              E
            </Link>
            <Link
              onClick={changealpha}
              name="F"
              className="alphabet__child"
              id="5"
            >
              F
            </Link>
            <Link
              onClick={changealpha}
              name="G"
              className="alphabet__child"
              id="6"
            >
              G
            </Link>
            <Link
              onClick={changealpha}
              name="H"
              className="alphabet__child"
              id="7"
            >
              H
            </Link>
            <Link
              onClick={changealpha}
              name="I"
              className="alphabet__child"
              id="8"
            >
              I
            </Link>
            <Link
              onClick={changealpha}
              name="J"
              className="alphabet__child"
              id="9"
            >
              J
            </Link>
            <Link
              onClick={changealpha}
              name="K"
              className="alphabet__child"
              id="10"
            >
              K
            </Link>
            <Link
              onClick={changealpha}
              name="L"
              className="alphabet__child"
              id="11"
            >
              L
            </Link>
            <Link
              onClick={changealpha}
              name="M"
              className="alphabet__child"
              id="12"
            >
              M
            </Link>
            <Link
              onClick={changealpha}
              name="N"
              className="alphabet__child"
              id="13"
            >
              N
            </Link>
            <Link
              onClick={changealpha}
              name="O"
              className="alphabet__child"
              id="14"
            >
              O
            </Link>
            <Link
              onClick={changealpha}
              name="P"
              className="alphabet__child"
              id="15"
            >
              P
            </Link>
            <Link
              onClick={changealpha}
              name="Q"
              className="alphabet__child"
              id="16"
            >
              Q
            </Link>
            <Link
              onClick={changealpha}
              name="R"
              className="alphabet__child"
              id="17"
            >
              R
            </Link>
            <Link
              onClick={changealpha}
              name="S"
              className="alphabet__child"
              id="18"
            >
              S
            </Link>
            <Link
              onClick={changealpha}
              name="T"
              className="alphabet__child"
              id="19"
            >
              T
            </Link>
            <Link
              onClick={changealpha}
              name="U"
              className="alphabet__child"
              id="20"
            >
              U
            </Link>
            <Link
              onClick={changealpha}
              name="V"
              className="alphabet__child"
              id="21"
            >
              V
            </Link>
            <Link
              onClick={changealpha}
              name="W"
              className="alphabet__child"
              id="22"
            >
              W
            </Link>
            <Link
              onClick={changealpha}
              name="X"
              className="alphabet__child"
              id="23"
            >
              X
            </Link>
            <Link
              onClick={changealpha}
              name="Y"
              className="alphabet__child"
              id="24"
            >
              Y
            </Link>
            <Link
              onClick={changealpha}
              name="Z"
              className="alphabet__child"
              id="25"
            >
              Z
            </Link>
          </div>
        </div>
      </div>

      <div className="intermediate__nav__bar">
        <div className="employ__status__side">
          <button>Payroll Schedule</button>
          <button>tip Schedule</button>
        </div>
        <div className="employ__list__side">
          <div className="search__section">
            <input type="text" autoComplete="off" value="Aa" />
            <SearchIcon className="search__section__icon" />
          </div>
          <div className="option__section">
            <NavLink to="" className="option__section__item">
              All
            </NavLink>
            <NavLink to="" className="option__section__item">
              Pending Tips
            </NavLink>
            <NavLink to="" className="option__section__item">
              Full Allowance
            </NavLink>
          </div>
        </div>
        <div className="line__2"></div>
      </div>

      <div className="user__body">
        <div className="employ__status__section">
          <div className="employ__status__section__nav">
            <div className="employ__status__section__nav__heading">
              Employing Status
            </div>
            <MoreHorizIcon className="three__dot__icon" />
          </div>
          <div className="employ__status__section__rate">
            <div className="rate__card">
              <div className="rate__card__innerbox">
                <div className="rate__percentage">68%</div>
              </div>
              <div className="rate__card__info">
                <div>Rate</div>
                <div>Normal</div>
                <div>status</div>
                <div>In Progress</div>
              </div>
            </div>
            <div className="essv__outer__data">
              <div>Tasks</div>
              <div>12230+</div>
              <div>28%</div>
            </div>
          </div>
          <div className="employ__dynamic">
            <div className="employ__dynamic__heading">Employee Dynamics</div>
            <div className="employ__dynamic__value">
              <div>+45%</div>
              <div>+1.2</div>
            </div>
          </div>
          <div className="analysis">September Analysis</div>
        </div>

        <div className="employ__list__section">
          <div className="employ__list__section__heading">{alpha}</div>
          <div className="employ__list__section__body">
            {sdata.map((val, ind) => {
              if (
                val.sdfname.charAt(0) == alpha.charAt(0) ||
                val.sdfname.charAt(0).toUpperCase() == alpha.charAt(0)
              ) {
                return (
                  <Employ
                    fname={val.sdfname}
                    lname={val.sdlname}
                    amt={val.sdamt}
                    acamt={val.sdamtoutof}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
