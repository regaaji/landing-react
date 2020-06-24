/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="http://github.com"
                  target="_blank"
                >
                  About
                </a>
              </li>
             
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed by{" "}
            <a
              href="https://github.com/regaaji"
              target="_blank"
            >
             Rega Aji
            </a>
            .
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
