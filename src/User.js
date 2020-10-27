import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./User.css";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
function User() {
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
            <Link className="alphabet__child down__header__line__itemactive">
              A
            </Link>
            <Link
              className="alphabet__child"
              activeClassName="down__header__line__itemactive"
            >
              B
            </Link>
            <Link
              className="alphabet__child"
              activeClassName="down__header__line__itemactive"
            >
              C
            </Link>
            <Link
              className="alphabet__child"
              activeClassName="down__header__line__itemactive"
            >
              D
            </Link>
            <Link
              className="alphabet__child"
              activeClassName="down__header__line__itemactive"
            >
              E
            </Link>
            <Link
              className="alphabet__child"
              activeClassName="down__header__line__itemactive"
            >
              F
            </Link>
            <Link
              className="alphabet__child"
              activeClassName="down__header__line__itemactive"
            >
              G
            </Link>
            <Link
              className="alphabet__child"
              activeClassName="down__header__line__itemactive"
            >
              H
            </Link>
            <Link
              className="alphabet__child"
              activeClassName="down__header__line__itemactive"
            >
              I
            </Link>
            <Link
              className="alphabet__child"
              activeClassName="down__header__line__itemactive"
            >
              J
            </Link>
            <Link
              className="alphabet__child"
              activeClassName="down__header__line__itemactive"
            >
              K
            </Link>
            <Link
              className="alphabet__child"
              activeClassName="down__header__line__itemactive"
            >
              L
            </Link>
            <Link
              className="alphabet__child"
              activeClassName="down__header__line__itemactive"
            >
              M
            </Link>
            <Link
              className="alphabet__child"
              activeClassName="down__header__line__itemactive"
            >
              N
            </Link>
            <Link
              className="alphabet__child"
              activeClassName="down__header__line__itemactive"
            >
              O
            </Link>
            <Link
              className="alphabet__child"
              activeClassName="down__header__line__itemactive"
            >
              P
            </Link>
            <Link
              className="alphabet__child"
              activeClassName="down__header__line__itemactive"
            >
              Q
            </Link>
            <Link
              className="alphabet__child"
              activeClassName="down__header__line__itemactive"
            >
              R
            </Link>
            <Link
              className="alphabet__child"
              activeClassName="down__header__line__itemactive"
            >
              S
            </Link>
            <Link
              className="alphabet__child"
              activeClassName="down__header__line__itemactive"
            >
              T
            </Link>
            <Link
              className="alphabet__child"
              activeClassName="down__header__line__itemactive"
            >
              U
            </Link>
            <Link
              className="alphabet__child"
              activeClassName="down__header__line__itemactive"
            >
              V
            </Link>
            <Link
              className="alphabet__child"
              activeClassName="down__header__line__itemactive"
            >
              W
            </Link>
            <Link
              className="alphabet__child"
              activeClassName="down__header__line__itemactive"
            >
              X
            </Link>
            <Link
              className="alphabet__child"
              activeClassName="down__header__line__itemactive"
            >
              Y
            </Link>
            <Link
              className="alphabet__child"
              activeClassName="down__header__line__itemactive"
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
          <div className="analysis">April Analysis</div>
        </div>

        <div className="employ__list__section"></div>
      </div>
    </>
  );
}

export default User;
