import React from "react";
import { ReactComponent as IconDiscord } from "./assets/icons/discord.svg";
import { ReactComponent as IconTwitter } from "./assets/icons/twitter.svg";
import { ReactComponent as IconGithub } from "./assets/icons/github.svg";
import { ReactComponent as IconGitlab } from "./assets/icons/gitlab.svg";
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">{/* <a href=".">LOGO</a> */}</div>
          <div className="social">
            <a
              href="https://discord.gg/rUTutTY3"
              title="Discord"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconDiscord className="icon" />
            </a>
            <a
              href="https://twitter.com/rock8s.com"
              title=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconTwitter className="icon" />
            </a>
            <a
              href="https://gitlab.com/clayrisser/rock8s"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconGithub className="icon" />
            </a>
            <a
              href="https://gitlab.com/bitspur/rock8s/rock8s"
              title="GitLab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconGitlab className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1 style={{ fontSize: 104 }}>rock8s</h1>
            <p style={{ fontSize: 28 }}>
              A kubernetes cluster powered by Rancher, OLM and Kops
            </p>
          </div>
          <a href="https://discord.gg/rUTutTY3">
            <div className="cta">Join the Discord</div>
          </a>
        </div>
        <div className="footer">
          <span>
            A{" "}
            <a
              className="underlined"
              href="https://gitlab.com/bitspur"
              target="_blank"
              rel="noopener noreferrer"
            >
              BitSpur
            </a>{" "}
            project
          </span>
        </div>
      </div>
    );
  };
}

export default App;
