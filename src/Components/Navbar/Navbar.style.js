import styled from "styled-components";

export const NavbarContainer = styled.section`
  width: 100%;
  height: 90px;
  background-color: var(--White-color);
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .desktop-navbar {
    width: 96%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navbar-left {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .logo-container {
    width: 70px;
    height: 70px;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
  }
  .logo-circle {
    width: 100%;
    height: 50%;
    color: var(--White-color);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 16px;
    font-weight: 700;
  }

  .top {
    top: 0;
    background-color: var(--Primary-color);
  }

  .bottom {
    bottom: 0;
    background-color: red;
  }

  .logo-title {
    font-size: 40px;
    font-weight: 700;
    text-decoration: none;
    color: var(--Primary-color);
  }

  .logo-title span {
    color: red;
  }

  .navbar-middle {
    display: flex;
    align-items: center;
  }

  .desktop-links {
    text-decoration: none;
    margin: 0 1.5rem;
    font-size: 26px;
    font-weight: 600;
    color: black;
    transition: all 0.3s ease-in-out;
  }

  .desktop-links:hover {
    color: var(--Primary-color);
  }

  .navbar-btn {
    font-size: 23px;
    font-weight: 600;
    padding: 1rem 1.8rem;
    border: none;
    background-color: var(--Primary-color);
    color: var(--White-color);
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .navbar-btn:hover {
    background-color: red;
  }

.mobile-navbar {
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
}

.mobile-navbar-container {
  width: 96%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}


.mobile-nav-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.mobile-nav-right {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--Primary-color);
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 10px;
}

.mobile-nav-right h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--White-color);
  cursor: pointer;
  text-transform: uppercase;
}

.mobile-menu {
  width: 100vw;
  background-color: var(--Primary-color);
  height: 100vh;
  position: fixed;
  left: 0;
  top: 90px;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 10;
  padding-top: 6rem;
  transition: all 0.4s ease-in-out;
}

.mobile-links {
  margin: 2rem 0;
  font-size: 28px;
  font-weight: 600;
  text-decoration: none;
  color: var(--White-color);
}


  @media screen and (max-width: 1024px) {
    .desktop-navbar {
      width: 98%;
    }

    .navbar-left {
      gap: 10px;
    }

    .logo-container {
      width: 50px;
      height: 50px;
    }

    .logo-title {
      font-size: 26px;
    }

    .logo-circle {
      font-size: 10px;
    }

    .desktop-links {
      margin: 0 1rem;
      font-size: 20px;
    }

    .navbar-btn {
      font-size: 18px;
      padding: 0.8rem 1rem;
    }
  }

  @media screen and (min-width: 769px) {
    .mobile-navbar {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    .desktop-navbar {
      display: none;
    }
  }
`;
