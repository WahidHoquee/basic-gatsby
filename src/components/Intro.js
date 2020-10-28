import React from "react"

import { Container, Title, Button } from "./common"

import "./intro.css"

const Intro = () => {
  return (
    <div className="intro-area">
      <Title title="Follow Me" social height="320px" />
      <Container>
        <div className="intro">
          <div className="intro-text">
            <p>Hello! I am</p>
            <h1>Suvashini Daliya</h1>
            <h3>Graphics Designer</h3>
            <ul>
              <li>Digital Marketing</li>
              <li>Telephone Marketing</li>
              <li>Sales Executive</li>
            </ul>
            <div className="action">
              <Button
                link="https://github.com/zonayedpca/zonayed.me/raw/master/src/data/file/MyResume.pdf"
                target="__blank"
                bgColor="#00cf5d"
                title="Get Resume"
              />
              <Button clickEvent link="#about" ml="15px" title="About Me" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Intro }
